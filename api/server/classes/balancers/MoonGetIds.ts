import { ParseIdList } from "../../interfaces/ParseIdList";
import fetch from 'node-fetch'
import * as fse from 'fs-extra'
export class MoonGetIds implements ParseIdList {

    private url_en_films = "http://moonwalk.cc/api/movies_foreign.json?api_token=3df23da89b78aa32335efa233c2a18d0"
    private url_ru_films = "http://moonwalk.cc/api/movies_russian.json?api_token=3df23da89b78aa32335efa233c2a18d0"
    private url_camrips = "http://moonwalk.cc/api/movies_camrip.json?api_token=3df23da89b78aa32335efa233c2a18d0"
    private url_en_serials = "http://moonwalk.cc/api/serials_foreign.json?api_token=3df23da89b78aa32335efa233c2a18d0"
    private url_ru_serials = "http://moonwalk.cc/api/serials_russian.json?api_token=3df23da89b78aa32335efa233c2a18d0"
    private url_anime_serials = "http://moonwalk.cc/api/serials_anime.json?api_token=3df23da89b78aa32335efa233c2a18d0"
    private url_anime_films = "http://moonwalk.cc/api/movies_anime.json?api_token=3df23da89b78aa32335efa233c2a18d0"


    async GetAllIDsAsync(): Promise<number[]> {
        let en_films = await (await fetch(this.url_en_films)).text()
        let ru_films = await (await fetch(this.url_ru_films)).text()
        let camrips = await (await fetch(this.url_camrips)).text()
        let en_serials = await (await fetch(this.url_en_serials)).text()
        let ru_serials = await (await fetch(this.url_ru_serials)).text()
        let anime_serials = await (await fetch(this.url_anime_serials)).text()
        let anime_films = await (await fetch(this.url_anime_films)).text()


        let s1 = JSON.parse(en_films);
        let s2 = JSON.parse(ru_films);
        let s3 = JSON.parse(camrips);
        let s4 = JSON.parse(en_serials);
        let s5 = JSON.parse(ru_serials);
        let s6 = JSON.parse(anime_serials);
        let s7 = JSON.parse(anime_films);


        let all = s1.report.movies.concat(s2.report.movies, s3.report.movies, s4.report.serials, s5.report.serials, s6.report.serials, s7.report.movies)

        let allIdsD: number[] = all.map(element => {
            return parseInt(element.kinopoisk_id)
        });

        let ids = Array.from(new Set(allIdsD));
        ids = ids.filter(s => !Number.isNaN(s))

        return (ids as number[])
    }
}