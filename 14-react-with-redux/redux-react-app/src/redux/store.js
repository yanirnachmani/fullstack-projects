import { createStore, combineReducers } from 'redux'
import { creditCardStateReducer, checkingAccountReducer } from './reducers.js'

export default createStore(
    combineReducers({
        checkingAccount: checkingAccountReducer,
        creditCardState: creditCardStateReducer
    })
)
