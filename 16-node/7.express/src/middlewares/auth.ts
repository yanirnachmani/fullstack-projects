import type { Request, Response, NextFunction } from 'express'

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    try {
        if (['123', '456'].includes(req.body.password)) {
            res.locals.isAdmin = true
            res.locals.message = 'Classified'
        } else {
            res.locals.message = 'Not Classified'
        }
        // throw 'This is big fault'
        next()
    } catch (error) {
        res.locals.error = true
        res.locals.message = error
        next()
    }
}

export default authMiddleware