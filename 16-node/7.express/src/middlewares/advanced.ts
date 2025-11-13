import express from 'express'
import authMiddleware from './auth.ts'


const port = 3030

const app = express()

app.use(express.json())
app.post('/', authMiddleware, (req, res, next) => {
    try {
        const response = {
            ...res.locals,
            reqParams: {
                ...req.body
            }
        }
        res.status(200).json(response)
    } catch (error) {
        res.status(500).send('Internal server error')
    }
})


app.use((req, res) => {
    res.status(404).send('Resource not found')
})

app.listen(port, () => console.log(`Avix listening on port ${port}`))