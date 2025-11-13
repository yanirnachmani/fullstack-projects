import express from 'express'


const port = 3030

const app = express()

app.use(express.json())
app.post('/', (req, res, next) => {
    try {

        if (['123', '456'].includes(req.body.password)) {
            next()
        }
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


app.post('/', (req, res, next) => {
    try {
        res.locals.isAdmin = true
        res.locals.message = 'Classified'
    } catch (error) {
        res.status(500).send('Internal server error')
    }
})


app.use((req, res) => {
    res.status(404).send('Resource not found')
})

app.listen(port, () => console.log(`Avix listening on port ${port}`))