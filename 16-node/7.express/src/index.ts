
import express from 'express'
// const express = require('express')

const app = express()

const port = 5002


const obj = {
    name: 'Dolex',
    age: 45,
    isTired: false,
    company: 'paragon',
}

const replacer = (key: string, value: unknown) => {
    if (typeof value === 'string' && key !== 'company') {
        return value.toUpperCase()
    }
    return value
}
// console.log(JSON.stringify(obj, replacer, 15))

// app.set('json spaces', 30)
// app.set('json replacer', replacer)


// app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.post('/', (req, res) => {
    try {
        console.log("Here I am")
        res.send(`
        <h1>Received</h1>
        <p>You sent: ${req.body.username}</p>
        <a href="/">Go Back</a>
        `);
    } catch (error) {
        res.status(500).send('error')
    }
})

// app.get('/', (req, res) => {
//     try {
//         // const error = {
//         //     status: 500,
//         //     message: 'ohh no!'
//         // }
//         // throw error
//         res.status(200).send('hello expresso!')
//     } catch (error: any) {
//         console.log(error)
//         res.status(500).send(error)
//     }
// })

// app.get('/send-null', (req, res) => {
//     try {
//         // const error = {
//         //     status: 500,
//         //     message: 'ohh no!'
//         // }
//         // throw error
//         res.status(200).json(null)
//     } catch (error: any) {
//         console.log(error)
//         res.status(500).json(error)
//     }
// })

// app.get('/user', (req, res) => {
//     try {
//         res.status(200).json(obj)
//     } catch (error: any) {
//         console.log(error)
//         res.status(500).json(error)
//     }
// })

// app.get('/home', (req, res) => {
//     try {
//         res.status(200).sendFile(`${process.cwd()}/views/home.html`)
//     } catch (error: any) {
//         console.log(error)
//         res.status(500).json('error')
//     }
// })

// app.get('/about', (req, res) => {
//     try {
//         res.status(200).sendFile(`${process.cwd()}/views/about.html`)
//     } catch (error: any) {
//         console.log(error)
//         res.status(500).json('error')
//     }
// })

// app.get('/about-us', (req, res) => {
//     try {
//         res.redirect('/about')
//     } catch (error: any) {
//         console.log(error)
//         res.status(500).json('error')
//     }
// })

// app.post('/', (req, res) => {
//     try {
//         console.log("Here I am")
//         const response = {
//             data: req.body,
//             message: 'This is the response'
//         }
//         res.status(200).json(response)
//     } catch (error) {
//         res.status(500).send('error')
//     }
// })





app.listen(port, () => console.log(`listening on port ${port}`))