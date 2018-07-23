"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cheerio = require("cheerio");
var name_model_1 = require("../../../../models/name.model");
var NameParser = /** @class */ (function () {
    function NameParser(html, id) {
        this.html = html;
        this.id = id;
        this.name = new name_model_1.Name();
        this.$ = cheerio.load(html);
    }
    NameParser.prototype.getModelName = function () {
        try {
            this.name._id = this.id;
            this.name.name = this.getName();
            this.name.alternateName = this.getAlternateName();
            this.name.poster = this.getPoster();
            return this.name;
        }
        catch (error) {
            return null;
        }
    };
    NameParser.prototype.getName = function () {
        return this.$(".moviename-big").first()
            .contents()
            .first()
            .text().trim();
    };
    NameParser.prototype.getAlternateName = function () {
        return this.$("*[itemprop = 'alternateName']").first()
            .contents()
            .first()
            .text().trim();
    };
    NameParser.prototype.getPoster = function () {
        var url = this.$("img[itemprop = 'image']").first()
            .attr("src");
        return url.includes("photo_none") ? null : url;
    };
    return NameParser;
}());
exports.NameParser = NameParser;
//# sourceMappingURL=NameParser.js.map