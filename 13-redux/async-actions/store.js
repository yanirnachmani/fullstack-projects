import { createStore, combineReducers, applyMiddleware } from 'redux'
import { getUsersReducer, postUsersReducer } from './reducers.js'
import { thunk } from 'redux-thunk'

export default createStore(
    combineReducers({
        getUsersReqAction: getUsersReducer,
        postUsersReqAction: postUsersReducer
    }),
    applyMiddleware(thunk)
)
