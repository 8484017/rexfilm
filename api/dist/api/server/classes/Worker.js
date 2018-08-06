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
var MoonGetIds_1 = require("./balancers/MoonGetIds");
var FilmParser_1 = require("./parsers/FilmParser");
var HtmlLoader_1 = require("./HtmlLoader");
var NameParser_1 = require("./parsers/NameParser");
var name_model_1 = require("../../../models/name.model");
var functions_1 = require("../util/functions");
var Db_1 = require("./Db");
var film_model_1 = require("../../../models/film.model");
var logger_1 = require("../../../api/server/util/logger");
var filmUtil_1 = require("../modelUtils/filmUtil");
var nameUtil_1 = require("../modelUtils/nameUtil");
var Worker = /** @class */ (function () {
    function Worker() {
    }
    Worker.Cancel = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.isCancel) return [3 /*break*/, 2];
                        this.isCancel = true;
                        return [4 /*yield*/, logger_1.Logger.Log("Отправлен запрос на остановку")];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    Worker.isWorks = function () {
        return this.isWork;
    };
    Worker.isCanceled = function () {
        return this.isCancel;
    };
    Worker.StartAsync = function (req) {
        return __awaiter(this, void 0, void 0, function () {
            var ids, _i, ids_1, id, filmEx, html, film, idsName, _a, idsName_1, nameId, exists, nameHtml, name_1, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 23, , 28]);
                        if (this.isWork)
                            return [2 /*return*/];
                        return [4 /*yield*/, logger_1.Logger.Log("Парсер запущен")];
                    case 1:
                        _b.sent();
                        this.isWork = true;
                        this.req = req;
                        return [4 /*yield*/, logger_1.Logger.Log("Грузим ids файлы")];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, this.getIdsAsync()];
                    case 3:
                        ids = _b.sent();
                        return [4 /*yield*/, logger_1.Logger.Log("ids файлы загружены")];
                    case 4:
                        _b.sent();
                        _i = 0, ids_1 = ids;
                        _b.label = 5;
                    case 5:
                        if (!(_i < ids_1.length)) return [3 /*break*/, 22];
                        id = ids_1[_i];
                        if (!this.isCancel) return [3 /*break*/, 7];
                        return [4 /*yield*/, logger_1.Logger.Log("Парсер остановлен")];
                    case 6:
                        _b.sent();
                        this.isCancel = false;
                        this.isWork = false;
                        throw "Work canceled";
                    case 7: return [4 /*yield*/, Db_1.db.getCollection(film_model_1.Film).count({ _id: id })];
                    case 8:
                        filmEx = _b.sent();
                        if (filmEx > 0) {
                            return [3 /*break*/, 21];
                        }
                        return [4 /*yield*/, new HtmlLoader_1.HtmlLoader(id, 1 /* film */, this.req).getHtmlAsync()];
                    case 9:
                        html = _b.sent();
                        if (html == null) {
                            return [3 /*break*/, 21];
                        }
                        film = new FilmParser_1.FilmParser(html, id).getFilm();
                        idsName = filmUtil_1.FilmUtil.GetNameIds(film);
                        return [4 /*yield*/, functions_1.Wait(5)];
                    case 10:
                        _b.sent();
                        _a = 0, idsName_1 = idsName;
                        _b.label = 11;
                    case 11:
                        if (!(_a < idsName_1.length)) return [3 /*break*/, 18];
                        nameId = idsName_1[_a];
                        return [4 /*yield*/, Db_1.db.getCollection(name_model_1.Name).count({ _id: nameId })];
                    case 12:
                        exists = _b.sent();
                        if (exists > 0)
                            return [3 /*break*/, 17];
                        return [4 /*yield*/, new HtmlLoader_1.HtmlLoader(nameId, 2 /* name */, this.req).getHtmlAsync()];
                    case 13:
                        nameHtml = _b.sent();
                        name_1 = new NameParser_1.NameParser(nameHtml, nameId).getModelName();
                        return [4 /*yield*/, nameUtil_1.NameUtil.PrepaireInsertAsync(name_1)];
                    case 14:
                        _b.sent();
                        return [4 /*yield*/, Db_1.db.getCollection(name_model_1.Name).insertOne(name_1)];
                    case 15:
                        _b.sent();
                        return [4 /*yield*/, functions_1.Wait(2)];
                    case 16:
                        _b.sent();
                        _b.label = 17;
                    case 17:
                        _a++;
                        return [3 /*break*/, 11];
                    case 18: return [4 /*yield*/, filmUtil_1.FilmUtil.PrepaireInsertAsync(film)];
                    case 19:
                        _b.sent();
                        return [4 /*yield*/, Db_1.db.getCollection(film_model_1.Film).insertOne(film)];
                    case 20:
                        _b.sent();
                        logger_1.Logger.Log("Фильм добавлен - " + id);
                        _b.label = 21;
                    case 21:
                        _i++;
                        return [3 /*break*/, 5];
                    case 22: return [3 /*break*/, 28];
                    case 23:
                        error_1 = _b.sent();
                        if (!(error_1.code === 11000)) return [3 /*break*/, 24];
                        return [3 /*break*/, 27];
                    case 24: return [4 /*yield*/, logger_1.Logger.Log('Error ' + error_1)];
                    case 25:
                        _b.sent();
                        return [4 /*yield*/, logger_1.Logger.Log("Парсер остановлен")];
                    case 26:
                        _b.sent();
                        this.isCancel = false;
                        this.isWork = false;
                        _b.label = 27;
                    case 27: return [3 /*break*/, 28];
                    case 28:
                        ;
                        return [2 /*return*/];
                }
            });
        });
    };
    Worker.getIdsAsync = function () {
        return __awaiter(this, void 0, void 0, function () {
            var moon;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new MoonGetIds_1.MoonGetIds().GetAllIDsAsync()];
                    case 1:
                        moon = _a.sent();
                        return [2 /*return*/, Array.from(new Set(moon))];
                }
            });
        });
    };
    Worker.isCancel = false;
    Worker.isWork = false;
    return Worker;
}());
exports.Worker = Worker;
