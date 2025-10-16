import axios from 'axios'

import { GET_USERS_REQ, POST_USERS_REQ, GET_USERS_RES_FAILED, GET_USERS_RES_OK, POST_USERS_RES_FAILED, POST_USERS_RES_OK } from './types.js'


export const getUsersReqAction = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: GET_USERS_REQ })
            const res = await axios.get('http://localhost:3001/')
            const users = res.data.map(obj => ({email: obj.email, id: obj.id}))
            dispatch({ type: GET_USERS_RES_OK, payload: users })
        } catch (error) {
            dispatch({ type: GET_USERS_RES_FAILED, payload: error.message })
        }
    }
}

export const postUsersReqAction = (ids) => {
    return async (dispatch) => {
        try {
            dispatch({ type: POST_USERS_REQ })
            const res = await axios.post('http://localhost:3001/', ids)
            const names = res.data.map(obj => `${obj.first_name} ${obj.last_name}`)
            dispatch({ type: POST_USERS_RES_OK, payload: names })
        } catch (error) {
            dispatch({ type: POST_USERS_RES_FAILED, payload: error.message })
        }
    }
}



