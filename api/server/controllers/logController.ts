import * as express from 'express'
import { db } from '../classes/Db';
import { Log } from "../../../models/log.model";
import { IsAdminFilter } from './adminController';



const router = express.Router();

router.get("/api/log", IsAdminFilter, async (r, s) => {
    try {

        let logs = await db.getCollection(Log).find({}).limit(100).sort({ timestamp: -1 }).toArray();

        return s.json(logs)
    } catch (error) {


    }
    return s.sendStatus(502)
})

router.delete("/api/log", IsAdminFilter, async (r, s) => {
    await db.getCollection(Log).remove({})
    return s.sendStatus(200)
})

export const LogRouter: express.Router = router;


