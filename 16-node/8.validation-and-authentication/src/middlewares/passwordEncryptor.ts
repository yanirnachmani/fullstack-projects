import type { Request, Response, NextFunction } from 'express'
import { hash, genSalt } from 'bcryptjs'


export default async (req: Request, res: Response, next: NextFunction) => {
    try {
        const salt = await genSalt()
        res.locals.password = await hash(req.body.password + process.env.PEPPER, salt)
        next()
    } catch (error) {
        console.log(error)
        return res.status(500).send(error)
    }
}