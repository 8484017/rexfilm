import * as express from 'express'
import { Worker } from '../classes/Worker';
import { IsAdminFilter } from './adminController';
import { Logger } from '../util/logger';




const router = express.Router();

router.get("/api/parser/start", IsAdminFilter, async (r, s) => {

    Worker.StartAsync(r)

    s.json("ok")
})


var loop = true;

router.get("/api/parser/startloop", IsAdminFilter, async (r, s) => {
    loop = true;
    (async () => {
        while (true) {
            try {
                if (!loop) {
                    Logger.Log("Цикл прерван пользователем")
                    return
                }
                Logger.Log("Цикл старт")
                await Worker.StartAsync(r);
                Logger.Log("Цикл закончен")
                await new Promise(resolve => setTimeout(resolve, 3600000));
            } catch (error) {
                Logger.Log(error)
                return
            }
        }
    })()

    s.json("ok")
})


router.get("/api/parser/setloop", IsAdminFilter, async (r, s) => {
    loop = false
    Logger.Log("Попытка остановки цикла")
    s.json(loop)
})





router.get("/api/parser/status", IsAdminFilter, async (r, s) => {
    s.json({ isWorks: Worker.isWorks(), isCancel: Worker.isCanceled() })
})

router.get("/api/parser/cancel", IsAdminFilter, async (r, s) => {

    Worker.Cancel()

    s.json("ok")
})

export const ParserRouter: express.Router = router;


