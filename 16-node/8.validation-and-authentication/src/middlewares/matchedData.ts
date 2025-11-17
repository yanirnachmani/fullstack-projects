import type { Request, Response, NextFunction } from 'express'

export default async (req: Request, res: Response, next: NextFunction) => {
    for(const key in req.body){
        if(!['email', 'username', 'password'].includes(key)){
            return res.status(400).send(`invalid property ${key}`)
        }
    }
    next()
}