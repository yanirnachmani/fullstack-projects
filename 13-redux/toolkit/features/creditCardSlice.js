import { createSlice} from '@reduxjs/toolkit'
import { creditCardState } from '../state.js'

const creditCardSlice = createSlice({
    name: 'creditCard',
    initialState : creditCardState,
    reducers :{
        payWithCreditCard: (state, action) => {
            state.amount += action.payload
        }
    }
})


export const creditCardReducer = creditCardSlice.reducer
export const creditCardActions = creditCardSlice.actions