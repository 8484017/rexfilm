"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var Db_1 = require("../classes/Db");
var film_model_1 = require("../../../models/film.model");
var CyrillicToTranslit = require("cyrillic-to-translit-js");
var router = express.Router();
router.get("/api/sitemap.xml", function (r, s) { return __awaiter(_this, void 0, void 0, function () {
    var filmsCount, filesCount, index;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Db_1.db.getCollection(film_model_1.Film).countDocuments()];
            case 1:
                filmsCount = _a.sent();
                filesCount = Math.ceil(filmsCount / 10000);
                s.write('<?xml version="1.0" encoding="UTF-8"?>');
                s.write('<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">');
                for (index = 0; index < filesCount; index++) {
                    s.write('<sitemap>');
                    s.write("<loc>" + r.protocol + "://" + r.hostname + "/api/" + index + ".xml</loc>");
                    s.write("<lastmod>" + new Date().toISOString() + "</lastmod>");
                    s.write('</sitemap>');
                }
                s.write('</sitemapindex>');
                s.end();
                return [2 /*return*/];
        }
    });
}); });
router.get("/api/:num.xml", function (r, s) { return __awaiter(_this, void 0, void 0, function () {
    var fileNum, cursor;
    return __generator(this, function (_a) {
        fileNum = parseInt(r.params.num);
        cursor = Db_1.db.getCollection(film_model_1.Film).find({}).skip(fileNum * 10000).limit(10000).project({ _id: 1, name: 1, timespan: 1 });
        s.write("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n    <urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">");
        cursor.forEach(function (d) {
            var slug = CyrillicToTranslit().transform(d.name, "-").toLocaleLowerCase().replace(/[^0-9a-z-]/gi, '');
            s.write("\n        <url>\n            <loc>" + r.protocol + "://" + r.hostname + "/online/" + d._id + "/" + slug + "</loc>\n            <lastmod>" + new Date(d.timespan).toISOString() + "</lastmod>\n            <changefreq>monthly</changefreq>\n            <priority>1</priority>\n        </url>\n  ");
        }, function (err) {
            s.write("</urlset>");
            s.end();
        });
        return [2 /*return*/];
    });
}); });
exports.SiteMapRouter = router;
