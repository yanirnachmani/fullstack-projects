import { Router } from 'express'
import { readFile, writeFile } from 'fs/promises'
import { adminAuthenticator, superAdminAuthenticator } from '../middlewares/tokenAuthenticator.ts'
type User = {
    "id": number
    "email": string
    "first_name": string
    "last_name": string
    "avatar": string
    "role": number
}

const router = Router()


router.get('/', adminAuthenticator, async (req, res) => {
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


router.get('/:id', adminAuthenticator, async (req, res) => {
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

router.post('/', superAdminAuthenticator, async (req, res) => {
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


router.put('/:id', async (req, res) => {
    try {
        const userId = +req.params.id
        const usersDB = JSON.parse(await readFile(`${process.cwd()}/db/users.json`, 'utf-8'))

        if (!usersDB.some((user: User) => user.id === userId)) {
            return res.status(404).send(`user ${userId} not found!`)
        }

        const updatedUsers = usersDB.map((user: User) => user.id === userId ? { id: user.id, ...req.body }
            : user)

        await writeFile(`${process.cwd()}/db/users.json`, JSON.stringify(updatedUsers))

        res.status(200).json(`User ${userId} updated with ${JSON.stringify(req.body)}`)
    } catch (error) {
        res.status(500)
    }
})

router.patch('/:id', async (req, res) => {
    try {
        const userId = +req.params.id
        const usersDB = JSON.parse(await readFile(`${process.cwd()}/db/users.json`, 'utf-8'))

        if (!usersDB.some((user: User) => user.id === userId)) {
            return res.status(404).send(`user ${userId} not found!`)
        }

        const updatedUsers = usersDB.map((user: User) => user.id === userId ? { ...user, ...req.body }
            : user)

        await writeFile(`${process.cwd()}/db/users.json`, JSON.stringify(updatedUsers))

        res.status(200).json(`User ${userId} updated`)
    } catch (error) {
        res.status(500)
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const userId = +req.params.id
        const usersDB = JSON.parse(await readFile(`${process.cwd()}/db/users.json`, 'utf-8'))

        if (!usersDB.some((user: User) => user.id === userId)) {
            return res.status(404).send(`user ${userId} not found!`)
        }

        const updatedUsers = usersDB.filter((user: User) => user.id !== userId)

        await writeFile(`${process.cwd()}/db/users.json`, JSON.stringify(updatedUsers))

        res.status(200).send(`User ${userId} deleted`)
    } catch (error) {
        res.status(500)
    }
})

export default router