import * as express from 'express'
import { db } from '../classes/Db';
import { Film } from '../../../models/film.model';

var CyrillicToTranslit = require("cyrillic-to-translit-js");



const router = express.Router();



router.get("/api/sitemap.xml", async (r, s) => {
    let filmsCount = await db.getCollection(Film).countDocuments({ isPublic: true });
    let filesCount = Math.ceil(filmsCount / 10000)

    s.write('<?xml version="1.0" encoding="UTF-8"?>')
    s.write('<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">')

    for (let index = 0; index < filesCount; index++) {
        s.write('<sitemap>')
        s.write(`<loc>${r.protocol}://${r.hostname}/api/${index}.xml</loc>`)
        s.write(`<lastmod>${new Date().toISOString()}</lastmod>`)
        s.write('</sitemap>')
    }

    s.write('</sitemapindex>')
    s.end()

})


router.get("/api/:num.xml", async (r, s) => {
    let fileNum = parseInt(r.params.num)

    let cursor = db.getCollection(Film).find({ isPublic: true }).skip(fileNum * 10000).limit(10000).project({ _id: 1, name: 1, timespan: 1 })
    s.write(`<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`)
    cursor.forEach((d) => {
        let slug = CyrillicToTranslit().transform(d.name, "-").toLocaleLowerCase().replace(/[^0-9a-z-]/gi, '');
        s.write(`
        <url>
            <loc>${r.protocol}://${r.hostname}/online/${d._id}/${slug}</loc>
            <lastmod>${new Date(d.timespan).toISOString()}</lastmod>
            <changefreq>monthly</changefreq>
            <priority>1</priority>
        </url>
  `)

    }, (err) => {
        s.write(`</urlset>`)
        s.end()
    })

})

export const SiteMapRouter: express.Router = router;

