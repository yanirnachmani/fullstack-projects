import type { Request, Response, NextFunction } from 'express'
import { compare } from 'bcryptjs'
import { readFile } from 'fs/promises'
import type { User } from '../types.ts'


export default async (req: Request, res: Response, next: NextFunction) => {
    try {

        const { email, username, password } = req.body

        const users = JSON.parse(await readFile(`${process.cwd()}/db/users.json`, 'utf8'))

        const [user] = users.filter((user: User) => user.username === username || user.email === email)

        if (!user) {
            return res.status(401).send(`username ${username} email ${email} unauthorized`)
        }

        const isValid = await compare(password + process.env.PEPPER, user.password)

        if (!isValid) {
            return res.status(401).send('Wrong Password')
        }

        res.locals.user = user
        next()
    } catch (error) {
        console.log(error)
        return res.status(500).send(error)
    }
}