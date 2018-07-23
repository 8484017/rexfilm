import * as express from 'express'
import { db } from '../classes/Db';
import { Film, FilmType } from '../../../models/film.model';
import { Films, FilmFilter, Pagination, IndexFilms } from '../../../models/films.model';
import { Name, NameFilms } from '../../../models/name.model';
import { NameUtil } from '../modelUtils/nameUtil';



const pageCount = 10;

const router = express.Router();

router.post("/api/films", async (r, s) => {

    let filter: FilmFilter = r.body

    let cond: any = {
        type: filter.type,
    }

    if (filter.genre.length > 0) {
        cond.genre = { $all: filter.genre }
    }

    let queryDb = db.getCollection(Film)
        .find(cond)
        .sort(filter.sortBy, -1)
        .limit(pageCount)
        .skip((filter.page - 1) * pageCount)
        .project({ _id: 1, name: 1, description: 1, poster_thumb: 1, time: 1, kp: 1, genre: 1, counrty: 1, year: 1 })

    let films = await queryDb.toArray();
    let count = await db.getCollection(Film).countDocuments(cond, {});
    let result = new Films();

    result.films = films;
    result.pagination = new Pagination()
    result.pagination.currentPage = filter.page
    result.pagination.itemsPerPage = pageCount
    result.pagination.totalItems = count

    s.json(result)

})

router.get("/api/film/:id", async (r, s) => {


    let result = await db.getCollection(Film).findOne({ _id: r.params.id }) as Film;
    let actors = db.getCollection(Name).find({ _id: { $in: result.actors } }).toArray();
    let compositors = db.getCollection(Name).find({ _id: { $in: result.compositors } }).toArray();
    let hudognik = db.getCollection(Name).find({ _id: { $in: result.hudognik } }).toArray();
    let montag = db.getCollection(Name).find({ _id: { $in: result.montag } }).toArray();
    let operators = db.getCollection(Name).find({ _id: { $in: result.operators } }).toArray();
    let produsers = db.getCollection(Name).find({ _id: { $in: result.produsers } }).toArray();
    let regisers = db.getCollection(Name).find({ _id: { $in: result.regisers } }).toArray();
    let scenarists = db.getCollection(Name).find({ _id: { $in: result.scenarists } }).toArray();

    await Promise.all([actors, compositors, hudognik, montag, operators, produsers, regisers, scenarists])
        .then(([actors, compositors, hudognik, montag, operators, produsers, regisers, scenarists]) => {
            result.actors = actors;
            result.compositors = compositors;
            result.hudognik = hudognik;
            result.montag = montag;
            result.operators = operators;
            result.produsers = produsers;
            result.regisers = regisers;
            result.scenarists = scenarists;
        });
    db.getCollection(Film).updateOne({ _id: r.params.id }, { $inc: { count: 1 } })
    s.json(result)
})

router.get("/api/films/index", async (r, s) => {
    let indexFilms = new IndexFilms()

    let newFilms = db.getCollection(Film)
        .find({ type: FilmType.film })
        .sort({ timespan: -1 })
        .project({ _id: 1, name: 1, description: 1, poster_thumb: 1, time: 1, kp: 1, genre: 1, counrty: 1, year: 1 })
        .limit(12).toArray()
    let newSerials = db.getCollection(Film)
        .find({ type: FilmType.serial })
        .sort({ timespan: -1 })
        .project({ _id: 1, name: 1, description: 1, poster_thumb: 1, time: 1, kp: 1, genre: 1, counrty: 1, year: 1 })
        .limit(12).toArray()
    let popularFilms = db.getCollection(Film)
        .find({ type: FilmType.film })
        .sort({ count: -1 })
        .project({ _id: 1, name: 1, description: 1, poster_thumb: 1, time: 1, kp: 1, genre: 1, counrty: 1, year: 1 })
        .limit(12).toArray()
    let popularSerials = db.getCollection(Film)
        .find({ type: FilmType.serial })
        .sort({ count: -1 })
        .project({ _id: 1, name: 1, description: 1, poster_thumb: 1, time: 1, kp: 1, genre: 1, counrty: 1, year: 1 })
        .limit(12).toArray()
    let rand = db.getCollection(Film)
        .aggregate([{ $sample: { size: 12 } }])
        .project({ _id: 1, name: 1, description: 1, poster_thumb: 1, time: 1, kp: 1, genre: 1, counrty: 1, year: 1 })
        .limit(12).toArray()


    await Promise.all([newFilms, newSerials, popularFilms, popularSerials, rand]).then(([newFilms, newSerials, popularFilms, popularSerials, rand]) => {
        indexFilms.newFilms = newFilms
        indexFilms.newSerials = newSerials
        indexFilms.popularFilms = popularFilms
        indexFilms.popularSerials = popularFilms
        indexFilms.randomFilms = rand
    })
    s.json(indexFilms)
})

router.get("/api/films/rand", async (r, s) => {
    let rand = await db.getCollection(Film).aggregate([{ $sample: { size: 12 } }])
        .project({ _id: 1, name: 1, description: 1, poster_thumb: 1, time: 1, kp: 1, genre: 1, counrty: 1, year: 1 })
        .toArray()
    s.json(rand)
})

router.get("/api/films/byname/:id", async (r, s) => {
    let nameFilms = new NameFilms();
    let id = parseInt(r.params.id);

    let cond: any = {}
    let actors = { $in: [id] };
    let regisers = { $in: [id] };
    let scenarists = { $in: [id] };
    let produsers = { $in: [id] };
    let operators = { $in: [id] };
    let compositors = { $in: [id] };
    let hudognik = { $in: [id] };
    let montag = { $in: [id] };
    cond = { $or: [{ actors }, { regisers }, { scenarists }, { produsers }, { operators }, { compositors }, { hudognik }, { montag }] }


    let name = db.getCollection(Name).findOne({ _id: id });
    let films = db.getCollection(Film).find(cond).sort({ year: -1 })
        .project({ _id: 1, name: 1, description: 1, poster_thumb: 1, time: 1, kp: 1, genre: 1, counrty: 1, year: 1 }).toArray()
    await Promise.all([name, films]).then(([name, films]) => {
        nameFilms.name = name;
        nameFilms.films = films
    })


    s.json(nameFilms)
})

export const FilmsRouter: express.Router = router;


