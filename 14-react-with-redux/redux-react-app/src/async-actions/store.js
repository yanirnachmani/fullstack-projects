import { createStore, combineReducers, applyMiddleware } from 'redux'
import { getUsersReducer, postUsersReducer } from './reducers.js'
import { thunk } from 'redux-thunk'

export default createStore(
    combineReducers({
        getUsersReq: getUsersReducer,
        postUsersReq: postUsersReducer
    }),
    applyMiddleware(thunk)
)
