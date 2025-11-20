import { Router } from 'express'
import type { Request, Response, NextFunction } from 'express'
import matchedData from '../middlewares/matchedData.ts'
import dataValidator from '../middlewares/dataValidator.ts'
import { validationResult } from 'express-validator'
import passwordValidator from '../middlewares/passwordValidator.ts'
import passwordEncryptor from '../middlewares/passwordEncryptor.ts'
import { readFile, writeFile } from 'fs/promises'
import type { User } from '../types.ts'
import passwordComparer from '../middlewares/passwordComparer.ts'
import jwt from 'jsonwebtoken'


const router = Router()

router.get('/', (req, res) => {
    try {
        res.status(200).send('auth api')
    } catch (error) {
        res.status(500).send('Internal server error')
    }
})

router.post('/register', [matchedData, ...dataValidator, passwordValidator, passwordEncryptor], async (req: Request, res: Response, next: NextFunction) => {
    try {
        if (!validationResult(req).isEmpty()) {
            return res.status(400).json({ errors: validationResult(req).array() })
        }

        const { email, username } = req.body

        const users = JSON.parse(await readFile(`${process.cwd()}/db/users.json`, 'utf8'))

        const [user] = users.filter((user: User) => user.username === username || user.email === email)

        if (user) {
            return res.status(400).send(`username ${username} or email ${email} already exits`)
        }


        const newUser: User = {
            id: (new Date()).toISOString(),
            email,
            username,
            password: res.locals.password
        }

        users.push(newUser)

        await writeFile(`${process.cwd()}/db/users.json`, JSON.stringify(users))

        jwt.sign(
            { username, email },
            process.env.ACCESS_TOKEN_SECRET as string,
            { expiresIn: '30s' },
            (err, accessToken) => {
                if (err) {
                    return res.status(500).send('Registered without token, please login')
                }
                res.status(200).json(accessToken)
            }
        )



    } catch (error: any) {
        console.log(error)
        res.status(500).send('error')
    }
})

router.post('/login', [passwordComparer], async (req: Request, res: Response, next: NextFunction) => {
    try {

        res.status(200).json(res.locals.user)


    } catch (error: any) {
        console.log(error)
        res.status(500).send('error')
    }
})


export default router