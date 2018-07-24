import { Film } from "../../../models/film.model";
import { ImageWorker } from "../classes/ImageWorker";
import { Logger } from "../util/logger";

export class FilmUtil {


    static GetNameIds(film: Film): number[] {
        if (!film) return
        let all = (film.actors as number[]).concat((film.compositors, film.hudognik, film.montag, film.operators, film.produsers, film.regisers, film.scenarists as number[]));
        return Array.from(new Set(all))
    }

    static async PrepaireInsertAsync(film: Film) {
        if (!film) return
        await this.MakePosterAsync(film);
        film.isPublic = this.ValidateFilm(film)
    }

    private static ValidateFilm(film: Film) {
        if (!film) return false;
        if (!film.name) return false;
        if (!film.description) return false;
        //  if (!film.poster) return false;
        if (!film.year) return false;
        if (film.counrty.length === 0) return false;
        if (film.actors.length === 0) return false;
        return true
    }

    private static async MakePosterAsync(film: Film) {
        try {
            if (!film || film.poster == null) return
            let img = new ImageWorker(film.poster);
            await img.loadFileAsync()
            await img.imageSave('public/static/data/films', film._id.toString())
            await img.imageSave('public/static/data/films', film._id.toString() + '_thumb', 150)
            film.poster = '/static/data/films/' + film._id + '.jpeg'
            film.poster_thumb = '/static/data/films/' + film._id + '_thumb.jpeg'
        } catch (error) {
            Logger.Log(error)
        }
    }

}