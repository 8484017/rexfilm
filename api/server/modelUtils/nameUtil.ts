import { Name } from "../../../models/name.model";
import { ImageWorker } from "../classes/ImageWorker";
import { Logger } from "../util/logger";

export class NameUtil {

    static async PrepaireInsertAsync(name: Name) {
        await this.MakePosterAsync(name);
    }


    private static async MakePosterAsync(name: Name) {
        try {
            if (!name || name.poster == null) return
            let img = new ImageWorker(name.poster);
            await img.loadFileAsync()
            await img.imageSave('public/static/data/names', name._id.toString())
            await img.imageSave('public/static/data/names', name._id.toString() + '_thumb', 150)
            name.poster = '/static/data/names/' + name._id + '.jpeg'
            name.poster_thumb = '/static/data/names/' + name._id + '_thumb.jpeg'
        } catch (error) {
            Logger.Log(error)
        }
    }
}