import type { Request, Response, NextFunction } from 'express'

const loggerMiddleware = (req: Request, res: Response, next: NextFunction) => {
    try {
        if(!res.locals.isAdmin || res.locals.error){
            return next()
        }
        const info = {
            url: req.url,
            method: req.method,
            date: new Date().toLocaleTimeString()
        }
        res.locals.info = info
        next()
    } catch (error) {
        res.locals.error = true
        res.locals.message = error
        next()
    }
}

export default loggerMiddleware
