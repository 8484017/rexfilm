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
Object.defineProperty(exports, "__esModule", { value: true });
var node_fetch_1 = require("node-fetch");
var MoonGetIds = /** @class */ (function () {
    function MoonGetIds() {
        this.url_en_films = "http://moonwalk.cc/api/movies_foreign.json?api_token=3df23da89b78aa32335efa233c2a18d0";
        this.url_ru_films = "http://moonwalk.cc/api/movies_russian.json?api_token=3df23da89b78aa32335efa233c2a18d0";
        this.url_camrips = "http://moonwalk.cc/api/movies_camrip.json?api_token=3df23da89b78aa32335efa233c2a18d0";
        this.url_en_serials = "http://moonwalk.cc/api/serials_foreign.json?api_token=3df23da89b78aa32335efa233c2a18d0";
        this.url_ru_serials = "http://moonwalk.cc/api/serials_russian.json?api_token=3df23da89b78aa32335efa233c2a18d0";
        this.url_anime_serials = "http://moonwalk.cc/api/serials_anime.json?api_token=3df23da89b78aa32335efa233c2a18d0";
        this.url_anime_films = "http://moonwalk.cc/api/movies_anime.json?api_token=3df23da89b78aa32335efa233c2a18d0";
    }
    MoonGetIds.prototype.GetAllIDsAsync = function () {
        return __awaiter(this, void 0, void 0, function () {
            var en_films, ru_films, camrips, en_serials, ru_serials, anime_serials, anime_films, s1, s2, s3, s4, s5, s6, s7, all, allIdsD, ids;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, node_fetch_1.default(this.url_en_films)];
                    case 1: return [4 /*yield*/, (_a.sent()).text()];
                    case 2:
                        en_films = _a.sent();
                        return [4 /*yield*/, node_fetch_1.default(this.url_ru_films)];
                    case 3: return [4 /*yield*/, (_a.sent()).text()];
                    case 4:
                        ru_films = _a.sent();
                        return [4 /*yield*/, node_fetch_1.default(this.url_camrips)];
                    case 5: return [4 /*yield*/, (_a.sent()).text()];
                    case 6:
                        camrips = _a.sent();
                        return [4 /*yield*/, node_fetch_1.default(this.url_en_serials)];
                    case 7: return [4 /*yield*/, (_a.sent()).text()];
                    case 8:
                        en_serials = _a.sent();
                        return [4 /*yield*/, node_fetch_1.default(this.url_ru_serials)];
                    case 9: return [4 /*yield*/, (_a.sent()).text()];
                    case 10:
                        ru_serials = _a.sent();
                        return [4 /*yield*/, node_fetch_1.default(this.url_anime_serials)];
                    case 11: return [4 /*yield*/, (_a.sent()).text()];
                    case 12:
                        anime_serials = _a.sent();
                        return [4 /*yield*/, node_fetch_1.default(this.url_anime_films)];
                    case 13: return [4 /*yield*/, (_a.sent()).text()];
                    case 14:
                        anime_films = _a.sent();
                        s1 = JSON.parse(en_films);
                        s2 = JSON.parse(ru_films);
                        s3 = JSON.parse(camrips);
                        s4 = JSON.parse(en_serials);
                        s5 = JSON.parse(ru_serials);
                        s6 = JSON.parse(anime_serials);
                        s7 = JSON.parse(anime_films);
                        all = s1.report.movies.concat(s2.report.movies, s3.report.movies, s4.report.serials, s5.report.serials, s6.report.serials, s7.report.movies);
                        allIdsD = all.map(function (element) {
                            return parseInt(element.kinopoisk_id);
                        });
                        ids = Array.from(new Set(allIdsD));
                        ids = ids.filter(function (s) { return !Number.isNaN(s); });
                        return [2 /*return*/, ids];
                }
            });
        });
    };
    return MoonGetIds;
}());
exports.MoonGetIds = MoonGetIds;
