import * as express from 'express'
import { Worker } from '../classes/Worker';
import { IsAdminFilter } from './adminController';




const router = express.Router();

router.get("/api/parser/start", IsAdminFilter, async (r, s) => {

    Worker.StartAsync(r)

    s.json("ok")
})

router.get("/api/parser/status", IsAdminFilter, async (r, s) => {
    s.json({ isWorks: Worker.isWorks(), isCancel: Worker.isCanceled() })
})

router.get("/api/parser/cancel", IsAdminFilter, async (r, s) => {

    Worker.Cancel()

    s.json("ok")
})

export const ParserRouter: express.Router = router;


