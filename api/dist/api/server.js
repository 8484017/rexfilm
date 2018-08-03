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
var parserController_1 = require("./server/controllers/parserController");
var Db_1 = require("./server/classes/Db");
var logController_1 = require("./server/controllers/logController");
var filmsController_1 = require("./server/controllers/filmsController");
var logger_1 = require("./server/util/logger");
var siteMapController_1 = require("./server/controllers/siteMapController");
var adminController_1 = require("./server/controllers/adminController");
var session = require("express-session");
var film_model_1 = require("../models/film.model");
var MongoStore = require('connect-mongo')(session);
module.exports = (function () { return __awaiter(_this, void 0, void 0, function () {
    var app;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                app = express();
                return [4 /*yield*/, Db_1.db.Connect()];
            case 1:
                _a.sent();
                return [4 /*yield*/, Db_1.db.getCollection(film_model_1.Film).createIndex({ name: 'text' }, { default_language: "ru" })];
            case 2:
                _a.sent();
                return [4 /*yield*/, Db_1.db.getCollection(film_model_1.Film).createIndex({ timespan: 1, year: 1, count: 1, kp: 1 })];
            case 3:
                _a.sent();
                app.use(express.urlencoded({ extended: false }));
                app.use(express.json());
                app.set('trust proxy', 1); // trust first proxy
                app.use(session({
                    secret: "this is may secr",
                    store: new MongoStore({
                        db: Db_1.db.db,
                        ttl: 24 * 60 * 60
                    }),
                    cookie: { secure: 'auto' }
                }));
                app.use(parserController_1.ParserRouter);
                app.use(logController_1.LogRouter);
                app.use(filmsController_1.FilmsRouter);
                app.use(siteMapController_1.SiteMapRouter);
                app.use(adminController_1.AdminRouter);
                app.use(express.static("public"));
                app.listen(3000, "localhost", function () {
                    console.log("start server " + "http://localhost:3000");
                    logger_1.Logger.Log("Server started");
                });
                return [2 /*return*/];
        }
    });
}); })();
