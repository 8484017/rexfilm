import * as cheerio from "cheerio";
import { Name } from "../../../../models/name.model";



export class NameParser {

    private $: CheerioStatic
    private name = new Name();

    constructor(private html: string, private id: number) {
        this.$ = cheerio.load(html)
    }


    public getModelName(): Name {
        try {
            this.name._id = this.id
            this.name.name = this.getName();
            this.name.alternateName = this.getAlternateName();
            this.name.poster = this.getPoster();
            return this.name;
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
        return this.$("*[itemprop = 'alternateName']").first()
            .contents()
            .first()
            .text().trim();
    }

    private getPoster() {
        let url = this.$("img[itemprop = 'image']").first()
            .attr("src")
        return url.includes("photo_none") ? null : url;
    }

}