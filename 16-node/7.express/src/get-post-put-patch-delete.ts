import express from 'express'
import { readFile, writeFile } from 'fs/promises'
import type { User } from 'types'

const app = express()

app.use(express.json())

app.get('/', async (req, res) => {
    try {
        const firstName = req.query.first_name
        const lastName = req.query.last_name
        const usersDB = JSON.parse(await readFile(`${process.cwd()}/db/users.json`, 'utf-8'))
        const users = usersDB.filter((user: User) => (
            (!firstName && !lastName) ||
            (firstName && user.first_name === firstName) ||
            (lastName && user.last_name === lastName)
        ))
        users.length ? res.status(200).json(users) : res.status(404).send(`Users not found!`)
    } catch (error) {
        console.log(error)
        res.status(500)
    }
})


app.get('/:id', async (req, res) => {
    try {
        const userId = +req.params.id
        const usersDB = JSON.parse(await readFile(`${process.cwd()}/db/users.json`, 'utf-8'))
        const [user] = usersDB.filter((user: User) => (
            user.id === userId
        ))

        user ? res.status(200).json(user) : res.status(404).send(`User with ${userId} id, not found!`)
    } catch (error) {
        console.log(error)
        res.status(500)
    }
})


app.post('/', async (req, res) => {
    try {
        const usersDB = JSON.parse(await readFile(`${process.cwd()}/db/users.json`, 'utf-8'))
        console.log({
            requestId: req.headers.requestId,
            method: 'post callback /',
            message: "after file reading",
            usersDB
        })
        const id = usersDB.reduce((max: number, current: User) => max > current.id ? max : current.id, 0)

        const user = { id: id + 1, ...req.body }
        usersDB.push(user)
        await writeFile(`${process.cwd()}/db/users.json`, JSON.stringify(usersDB))
        console.log({
            requestId: req.headers.requestId,
            method: 'post callback /',
            message: "after file writing",
            usersDB
        })

        res.status(200).send(`${user.first_name} with id ${user.id} added successfully`)
    } catch (error) {
        console.log(error)
        res.status(500)
    }

})


app.listen(6661, () => console.log('Dolex 6661'))