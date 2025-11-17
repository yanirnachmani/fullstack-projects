import express from 'express'
import authMiddleware from './auth.ts'
import loggerMiddleware from './logger.ts'
import type { Request, Response, NextFunction } from 'express'

const middlewares = [authMiddleware, loggerMiddleware]

const port = 3030

const app = express()

app.use(express.json())
app.post('/', middlewares,(req: Request, res: Response, next: NextFunction) => {
    try {
        if(res.locals.error){
            return res.status(500).send(res.locals.message)
        }
        const response = {
            ...res.locals,
            reqParams: req.body
        }
        if(!res.locals.isAdmin){
            return res.status(401).json(response)
        }
        res.json(response)
    } catch (error) {
        res.status(500).send('Internal server error')
    }
})


app.use((req, res) => {
    res.status(404).send('Resource not found')
})

app.listen(port, () => console.log(`Avix listening on port ${port}`))