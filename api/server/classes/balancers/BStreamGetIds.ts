import { ParseIdList } from "../../interfaces/ParseIdList";
import fetch from 'node-fetch'

export class BSreamGetIds implements ParseIdList {

    private url_films = "https://bstreem.com/dl/film_ninel1948@bk.ru.json"
    private url_mult = "https://bstreem.com/dl/mult_ninel1948@bk.ru.json"

    async GetAllIDsAsync(): Promise<number[]> {
        let film_resp = await (await fetch(this.url_films)).text()
        let mult_resp = await (await fetch(this.url_films)).text()

        let filmsObjs = JSON.parse(film_resp);
        let multObjs = JSON.parse(mult_resp);

        let filmIds = filmsObjs.map(element => {
            return element.kp
        });
        let multIds = multObjs.map(element => {
            return element.kp
        });

        let idsb = filmIds.concat(multIds);
        // let ids = RemoveDoubleArray(idsb);
        let ids = Array.from(new Set(idsb));


        return (ids as number[])
    }
}