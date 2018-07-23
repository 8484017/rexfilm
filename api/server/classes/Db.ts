import { MongoClient, Db } from "mongodb";

export class db {
    public static db: Db;
    public static async  Connect() {
        this.db = (await MongoClient.connect("mongodb://localhost:27017/kinon", { useNewUrlParser: true })).db("kinon")
    }

    public static getCollection(T: any) {
        return this.db.collection(T.name)
    }
}