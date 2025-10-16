import { CREDIT_CARD_PAYMENT, WITHDRAW, BLACK_CLIENT, GOLD_CLIENT } from "./types.js";

import { creditCardState, checkingAccount } from './state.js'

const checkingAccountReducer = (state = checkingAccount, action) => {
    switch (action.type) {
        case WITHDRAW:
            return {
                amount: state.amount - action.payload
            }

        default:
            return state
    }
}

const creditCardStateReducer = (state = creditCardState, action) => {
    switch (action.type) {
        case CREDIT_CARD_PAYMENT:
            return {
                ...state,
                amount: state.amount + action.payload
            }
        case GOLD_CLIENT:
            return {
                ...state,
                gold: true,
            }
        case BLACK_CLIENT:
            return {
                ...state,
                black: true,
            }
        default:
            return state
    }
}


export { checkingAccountReducer, creditCardStateReducer }