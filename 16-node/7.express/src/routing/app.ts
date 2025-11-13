import express from 'express'
import api from './api.ts'
import userApi from './users.ts'


const port = 3030

const app = express()

app.use(express.json())
app.get('/', (req, res) => {
    try {
        res.status(200).send('Hello expresso')
    } catch (error) {
        res.status(500).send('Internal server error')
    }
})

app.use('/api', api)
app.use('/user-api', userApi)

app.use((req, res) => {
    res.status(404).send('Resource not found')
})

app.listen(port, () => console.log(`Avix listening on port ${port}`))