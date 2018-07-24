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

            let filmEx = await db.getCollection(Film).count({ _id: id })
            if (filmEx > 0) {
                continue;
            }

            let html = await new HtmlLoader(id, HtmlLoaderType.film, this.req).getHtmlAsync();
            let film = new FilmParser(html, id).getFilm()
            let idsName = FilmUtil.GetNameIds(film)
            await Wait(30)
            for (let nameId of idsName) {
                let exists = await db.getCollection(Name).count({ _id: nameId })
                if (exists > 0) continue;

                let nameHtml = await new HtmlLoader(nameId, HtmlLoaderType.name, this.req).getHtmlAsync();
                let name = new NameParser(nameHtml, nameId).getModelName()
                await NameUtil.PrepaireInsertAsync(name)
                await db.getCollection(Name).insertOne(name);
                await Wait(20)
            }
            try {
                await FilmUtil.PrepaireInsertAsync(film);
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