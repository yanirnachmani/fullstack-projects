import { GET_USERS_REQ, POST_USERS_REQ, GET_USERS_RES_FAILED, GET_USERS_RES_OK, POST_USERS_RES_FAILED, POST_USERS_RES_OK } from './types.js'


import { getUsersState, postUsersState } from './states.js'

export const getUsersReducer = (state = getUsersState, action) => {
    switch (action.type) {
        case GET_USERS_REQ:
            return {
                emails: [], loading: true, error: ''
            }
        case GET_USERS_RES_OK:
            return {
                emails: action.payload, loading: false, error: ''
            }
        case GET_USERS_RES_FAILED:
            return {
                emails: [], loading: false, error: action.payload
            }
        default:
            return state
    }
}


export const postUsersReducer = (state = postUsersState, action) => {
    switch (action.type) {
        case POST_USERS_REQ:
            return {
                names: [], loading: true, error: ''
            }
        case POST_USERS_RES_OK:
            return {
                names: action.payload, loading: false, error: ''
            }
        case POST_USERS_RES_FAILED:
            return {
                names: [], loading: false, error: action.payload
            }
        default:
            return state
    }
}



