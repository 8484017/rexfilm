import { db } from "../classes/Db";
import { Log } from '../../../models/log.model'
export class Logger {

    public static async Log(message: string = null, error: string = null) {
        await db.getCollection(Log).insert({ message: message, error: error, timestamp: Date.now() })
    }
}