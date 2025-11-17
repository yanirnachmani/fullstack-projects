import express from 'express'
import authApi from './apis/auth.ts'
import dotenv from 'dotenv'

dotenv.config()


const port = process.env.PORT || '3000'
const hostname = process.env.HOSTNAME || 'localhost'
const app = express()

app.use(express.json())

app.use('/auth', authApi)

app.get('/', (req, res) => {
    try {
        res.status(200).send('pong')
    } catch (error) {
        res.status(500).send('Internal server error')
    }
})


app.use((req, res) => {
    res.status(404).send('Resource not found')
})

app.listen(parseInt(port), hostname, () => console.log(`Avix listening on port ${port}`))