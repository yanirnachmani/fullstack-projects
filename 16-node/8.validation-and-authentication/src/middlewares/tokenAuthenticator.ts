
import type { Request, Response, NextFunction } from 'express'
import { readFile, writeFile } from 'fs/promises'
import type { User } from '../types.ts'
import jwt from 'jsonwebtoken'

const authorizer = (req: Request, res: Response, next: NextFunction, superAdminNeeded = false) => {
    const authHeader = req.headers.authorization
    const token = authHeader && authHeader.split(' ')[1]

    if (!token) {
        return res.status(401).send('Invalid auth header')
    }

    if (!process.env.ACCESS_TOKEN_SECRET) {
        return res.status(500).send('Internal server error')
    }

    jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET,
        async (err, decoded) => {
            if (err) {
                return res.status(401).send('Token not valid')
            }
            const { email, username } = decoded as User
            try {
                const admins = JSON.parse(await readFile(`${process.cwd()}/db/admins.json`, 'utf8'))

                const [admin] = admins.filter((admin: User) => admin.username === username || admin.email === email)

                if (!admin) {
                    return res.status(401).send('Admin not found')
                }

                if (superAdminNeeded) {
                    if (!admin.superAdmin) {
                        return res.status(403).send('You are not allowed!')
                    }
                }

                next()
            } catch (error) {
                res.status(500).send(error)
            }
        }
    )

}


export const adminAuthenticator = (req: Request, res: Response, next: NextFunction) => {
    authorizer(req, res, next)
}

export const superAdminAuthenticator = (req: Request, res: Response, next: NextFunction) => {
    authorizer(req, res, next, true)
}