import * as express from 'express'
import { db } from '../classes/Db';
import { Body } from 'node-fetch';




const isAdminFilter = (req: express.Request, res: express.Response, next: express.NextFunction) => {

    let admin = req.session.admin
    console.log(req);

    if (admin && admin.ip === req.connection.remoteAddress) {
        return next()
    }

    return res.sendStatus(404);

}
const router = express.Router();

router.get("/api/isAdmin", isAdminFilter, async (r, s) => {
    s.sendStatus(200)
})

router.post('/api/login', (req, res) => {
    let data = req.body
    if (data.name === "miningo", data.pass === "123") {
        req.session.admin = { ip: req.connection.remoteAddress }
        return res.sendStatus(200)
    }
    return res.sendStatus(502)
})

export const AdminRouter: express.Router = router;
export const IsAdminFilter: any = isAdminFilter;


