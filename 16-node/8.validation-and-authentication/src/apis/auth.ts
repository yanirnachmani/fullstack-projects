import { Router } from 'express'
import type { Request, Response, NextFunction} from 'express'
import matchedData from '../middlewares/matchedData.ts'
import dataValidator from '../middlewares/dataValidator.ts'

const router = Router()


router.post('/register', [matchedData, ...dataValidator], (req: Request, res: Response, next: NextFunction) => {
    try {
        res.send("everything is fine")
    } catch (error: any) {
        console.log(error)
        res.status(500).send('error')
    }
})


export default router