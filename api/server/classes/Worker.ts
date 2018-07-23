import { MoonGetIds } from "./balancers/MoonGetIds";
import { FilmParser } from "./parsers/FilmParser";
import { HtmlLoader, HtmlLoaderType } from "./HtmlLoader";
import { Request } from "express"
import { NameParser } from "./parsers/NameParser";
import { Name } from "../../../models/name.model";
import { Wait } from "../util/functions";
import { db } from "./Db";
import { Film } from "../../../models/film.model";

import { Logger } from "../../../api/server/util/logger";
import { FilmUtil } from "../modelUtils/filmUtil";
import { NameUtil } from "../modelUtils/nameUtil";
export class Worker {

    private static isCancel: boolean = false;
    private static isWork: boolean = false;
    private static req: Request;

    public static async  Cancel() {
        if (!this.isCancel) {
            this.isCancel = true;
            await Logger.Log("Отправлен запрос на остановку")
        }
    }

    public static isWorks() {
        return this.isWork;
    }
    public static isCanceled() {
        return this.isCancel;
    }

    public static async StartAsync(req) {
        if (this.isWork) return;
        await Logger.Log("Парсер запущен")
        this.isWork = true;
        this.req = req
        await Logger.Log("Грузим ids файлы")
        var ids = await this.getIdsAsync();
        await Logger.Log("ids файлы загружены")
        for (let id of ids) {
            if (this.isCancel) {
                await Logger.Log("Парсер остановлен")
                this.isCancel = false;
                this.isWork = false
                throw "Work canceled";
            }
            await Logger.Log("Проверяем фильм в базе " + id)
            let filmEx = await db.getCollection(Film).count({ _id: id })
            if (filmEx > 0) {
                await Logger.Log("Фильм " + id + 'уже есть в базе')
                continue;
            }
            await Logger.Log("Фильма " + id + 'нет в базе - начинаем загрузку html')
            let html = await new HtmlLoader(id, HtmlLoaderType.film, this.req).getHtmlAsync();
            await Logger.Log('html загружен ' + id++ + 'начинаем парсинг фильма')
            let film = new FilmParser(html, id).getFilm()
            await Logger.Log('парсинг закончен ' + id + 'получаем ids актеров и т.д.')
            let idsName = FilmUtil.GetNameIds(film)
            await Logger.Log('ids актеров получены ' + id + 'ждем и начинаем загрузку актора')
            await Wait(20)
            for (let nameId of idsName) {
                let exists = await db.getCollection(Name).count({ _id: nameId })
                if (exists > 0) continue;

                let nameHtml = await new HtmlLoader(nameId, HtmlLoaderType.name, this.req).getHtmlAsync();
                let name = new NameParser(nameHtml, nameId).getModelName()
                await NameUtil.PrepaireInsertAsync(name)
                await db.getCollection(Name).insertOne(name);
                await Logger.Log('актер получен ' + nameId)

                await Wait(10)
            }
            try {
                await Logger.Log('film prepaire save')
                await FilmUtil.PrepaireInsertAsync(film);
                await Logger.Log('film save')
                await db.getCollection(Film).insertOne(film);
                Logger.Log("Фильм добавлен - " + id);
            } catch (error) {
                if (error.code === 11000) { }
                else {
                    await Logger.Log('Error ' + error)
                    throw (error)
                }
            }

        };
    }

    private static async getIdsAsync() {

        let moon = await new MoonGetIds().GetAllIDsAsync();

        return Array.from(new Set(moon))
    }



}