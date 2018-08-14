import * as express from 'express'
import { ParserRouter } from './server/controllers/parserController'
import { db } from "./server/classes/Db";

import { LogRouter } from './server/controllers/logController';
import { FilmsRouter } from './server/controllers/filmsController';


import { Logger } from './server/util/logger';
import { SiteMapRouter } from './server/controllers/siteMapController';
import { AdminRouter } from './server/controllers/adminController';
import * as session from "express-session";
import { Film } from '../models/film.model';
import { Worker } from './server/classes/Worker';
const MongoStore = require('connect-mongo')(session);

module.exports = (async () => {

    var app = express()

    await db.Connect();
    await db.getCollection(Film).dropIndexes()
    await db.getCollection(Film).createIndex({ name: 'text' }, { default_language: "ru" })
    await db.getCollection(Film).createIndex({ timespan: 1 })
    await db.getCollection(Film).createIndex({ year: 1 })
    await db.getCollection(Film).createIndex({ count: 1 })
    await db.getCollection(Film).createIndex({ kp: 1 })

    app.use(express.urlencoded({ extended: false }))
    app.use(express.json())
    app.set('trust proxy', 1) // trust first proxy
    app.use(session({
        secret: "this is may secr",
        store: new MongoStore({
            db: db.db,
            ttl: 24 * 60 * 60
        }),
        cookie: { secure: 'auto' }
    }))


    app.use(ParserRouter);
    app.use(LogRouter);
    app.use(FilmsRouter);
    app.use(SiteMapRouter);
    app.use(AdminRouter);

    app.use(express.static("public"))

    worker()



    app.listen(3000, "localhost", () => {
        console.log("start server " + "http://localhost:3000");
        Logger.Log("Server started")
    })

})();

const worker = async () => {
    while (true) {
        try {
            let date = new Date(0, 0, 0, 1, 0, 0, 0).getMilliseconds()
            Worker.StartAsync({});
            await new Promise(resolve => setTimeout(resolve, date));
        } catch (error) {
            Logger.Log(error)
            return
        }
    }
}