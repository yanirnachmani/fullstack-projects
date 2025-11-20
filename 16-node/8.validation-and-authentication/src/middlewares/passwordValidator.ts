import PasswordValidator from 'password-validator'
import type { Request, Response, NextFunction } from 'express'


const schema = new PasswordValidator()

schema.
    is().min(8).
    is().max(14).
    has().uppercase().
    has().lowercase().
    has().not().spaces().
    has().digits().
    is().not().oneOf(['nadix', 'username', 'email'])


export default (req: Request, res: Response, next: NextFunction) => {
    if (!schema.validate(req.body.password)) {
        return res.status(400).json({ errors: schema.validate(req.body.password, { details: true }) })
    }
    next()
}