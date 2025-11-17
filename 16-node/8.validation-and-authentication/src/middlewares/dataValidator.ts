import { body} from 'express-validator'

export default [
    body('username').not().isEmpty().withMessage('Username is required!'),
    body('email').isEmail().withMessage('Invalid email provided')
]