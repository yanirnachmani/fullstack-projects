import { createSlice} from '@reduxjs/toolkit'
import { creditCardState } from '../state.js'
import { checkingAccountActions } from './checkingAccountSlice.js'

const creditCardSlice = createSlice({
    name: 'creditCard',
    initialState : creditCardState,
    reducers :{
        payWithCreditCard: (state, action) => {
            state.amount += action.payload
        },
        addToGold: (state) => {
            state.gold = true
            state.black = false
        },
        addToBlack: (state) => {
            state.gold = false
            state.black = true
        },
        removeFromLists: (state) => {
            state.gold = false
            state.black = false
        },
    },
    extraReducers: builder => {
        builder.addCase(checkingAccountActions.withdrawMoney, state => {
            state.active = true
        })
    }
})


export const creditCardReducer = creditCardSlice.reducer
export const creditCardActions = creditCardSlice.actions