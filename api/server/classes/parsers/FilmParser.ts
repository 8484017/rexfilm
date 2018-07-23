import * as cheerio from "cheerio";
import { Film, FilmType } from "../../../../models/film.model";


export class FilmParser {

    private $: CheerioStatic
    private film = new Film();

    constructor(private html: string, private id: number) {
        this.$ = cheerio.load(html)
    }


    public getFilm(): Film {
        try {
            this.film._id = this.id
            this.film.name = this.getName();
            this.film.alternateName = this.getAlternateName();
            this.film.type = this.getType();
            this.film.description = this.getDescription()
            this.film.year = this.getYear();
            this.film.counrty = this.getCountry();
            this.film.slogan = this.getSlogan();
            this.film.regisers = this.getPeoples('режиссер');
            this.film.scenarists = this.getPeoples('сценарий');
            this.film.produsers = this.getPeoples('продюсер');
            this.film.operators = this.getPeoples('оператор');
            this.film.compositors = this.getPeoples('композитор');
            this.film.hudognik = this.getPeoples('художник');
            this.film.montag = this.getPeoples('монтаж');
            this.film.genre = this.getGenre()
            this.film.time = this.getTime()
            this.film.kp = this.getKP()
            this.film.actors = this.getActors()
            this.film.features = this.getFeatures()
            this.film.poster = this.getPoster()
            return this.film;
        } catch (error) {
            return null
        }
    }


    private getName() {
        return this.$(".moviename-big").first()
            .contents()
            .first()
            .text().trim();
    }

    private getAlternateName() {
        return this.$("*[itemprop = 'alternativeHeadline']").first()
            .contents()
            .first()
            .text().trim();
    }

    private getType() {
        if (this.$("title").text().includes("сериал")) {
            return FilmType.serial
        } else {
            return FilmType.film
        }
    }

    private getDescription() {
        return this.$(".film-synopsys").first().text().trim();
    }


    private getYear() {
        let link = this.$("a[href*='year']").first().text().trim();
        let year = parseInt(link);
        return year;
    }

    private getCountry() {
        let list: string[] = []
        list = this.$("td:contains('страна')").first().next()
            .find("a[href*='country']").map((i, el) => {
                return this.$(el).text().trim();
            }).get()
        return list;
    }

    private getSlogan() {
        let slogan = this.$("td:contains('слоган')").first().next()
            .text().trim();
        return slogan;
    }

    private getPeoples(td: string) {
        let list: number[] = []
        var links = this.$(`td:contains('${td}')`).first().next()
            .find("a[href*='name']").map((i, el) => {
                return this.$(el).attr("href");
            }).get()
        list = links.map(s => parseInt(s.replace(/^\D+/g, '')))
        return list;
    }

    private getGenre() {
        let list: string[]
        list = this.$("*[itemprop='genre']").children().map((i, el) => {
            return this.$(el).text().trim();
        }).get();
        return list;
    }

    private getTime() {
        return this.$(".time").first().contents().first().text().trim()
    }

    private getKP() {
        let str = this.$(".rating_ball").first().text().trim()
        return parseFloat(str || "5")
    }

    private getActors() {
        let list: string[]
        list = this.$("*:contains('В главных ролях:')").next().find("li[itemprop='actors']").map((i, el) => {
            return this.$(el).children().first().attr("href")
        }).get();

        let listIds = list.filter(s => s.includes("name")).map(s => {
            let strNum = s.replace(/^\D+/g, '')
            return parseInt(strNum)
        })
        return listIds;
    }

    private getFeatures() {
        return this.$("span.trivia_text").map((i, el) => {
            return this.$(el).text();
        }).get()
    }
    private getPoster() {
        let url = this.$("img[itemprop = 'image']").first()
            .attr("src")

        return url.includes("poster_none") ? null : url;
    }
}