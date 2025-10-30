import { createSlice } from '@reduxjs/toolkit'
import { checkingAccount } from '../state.js'

const checkingAccountSlice = createSlice({
    name: 'checkingAccount',
    initialState: checkingAccount,
    reducers: {
        withdrawMoney: (state, action) => {
            state.amount -= action.payload
        }
    }
})

export const checkingAccountReducer = checkingAccountSlice.reducer
export const checkingAccountActions = checkingAccountSlice.actions