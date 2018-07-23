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
var ImageWorker_1 = require("../classes/ImageWorker");
var FilmUtil = /** @class */ (function () {
    function FilmUtil() {
    }
    FilmUtil.GetNameIds = function (film) {
        var all = film.actors.concat((film.compositors, film.hudognik, film.montag, film.operators, film.produsers, film.regisers, film.scenarists));
        return Array.from(new Set(all));
    };
    FilmUtil.PrepaireInsertAsync = function (film) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.MakePosterAsync(film)];
                    case 1:
                        _a.sent();
                        film.isPublic = this.ValidateFilm(film);
                        return [2 /*return*/];
                }
            });
        });
    };
    FilmUtil.ValidateFilm = function (film) {
        if (!film.name)
            return false;
        if (!film.description)
            return false;
        if (!film.poster)
            return false;
        if (!film.year)
            return false;
        if (film.counrty.length === 0)
            return false;
        if (film.actors.length === 0)
            return false;
        return true;
    };
    FilmUtil.MakePosterAsync = function (film) {
        return __awaiter(this, void 0, void 0, function () {
            var img, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        if (film.poster == null)
                            return [2 /*return*/];
                        img = new ImageWorker_1.ImageWorker(film.poster);
                        return [4 /*yield*/, img.loadFileAsync()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, img.imageSave('public/static/data/films', film._id.toString())];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, img.imageSave('public/static/data/films', film._id.toString() + '_thumb', 150)];
                    case 3:
                        _a.sent();
                        film.poster = '/static/data/films/' + film._id + '.jpeg';
                        film.poster_thumb = '/static/data/films/' + film._id + '_thumb.jpeg';
                        return [3 /*break*/, 5];
                    case 4:
                        error_1 = _a.sent();
                        console.log(error_1);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    return FilmUtil;
}());
exports.FilmUtil = FilmUtil;
//# sourceMappingURL=filmUtil.js.map