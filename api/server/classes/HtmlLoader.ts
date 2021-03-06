import { JSDOM } from 'jsdom'
import { Request } from "express"
export class HtmlLoader {

    url: string
    constructor(private id: number, type: HtmlLoaderType, private req: Request) {
        switch (type) {
            case HtmlLoaderType.film:
                this.url = "https://kinopoisk.ru/film/" + id.toString();
                break;
            case HtmlLoaderType.name:
                this.url = "https://kinopoisk.ru/name/" + id.toString();
                break;
        }
    }


    async getHtmlAsync(): Promise<string> {
        return await JSDOM.fromURL(this.url, { cookieJar: this.req.cookies, userAgent: this.req.header("User-Agent") })
            .then(s => {
                return s.serialize();
            })
            .catch(s => {
                return null
            })
    }
}

export const enum HtmlLoaderType {
    film = 1,
    name = 2
}