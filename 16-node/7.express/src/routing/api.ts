import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
    try {
        res.status(200).send('hello api')
    } catch (error: any) {
        console.log(error)
        res.status(500).send('error')
    }
})

router.get('/home', (req, res) => {
    try {
        res.status(200).send('home page')
    } catch (error: any) {
        console.log(error)
        res.status(500).send('error')
    }
})

router.get('/about', (req, res) => {
    try {
        res.status(200).send('about')
    } catch (error: any) {
        console.log(error)
        res.status(500).send('error')
    }
})


export default router