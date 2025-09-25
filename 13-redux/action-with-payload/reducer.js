import { CREDIT_CARD_PAYMENT, WITHDRAW } from "./types.js";
import initialState from './state.js'
import state from "./state.js";

export default (state = initialState, action) => {
    switch (action.type) {
        case CREDIT_CARD_PAYMENT:
            return {
                ...state,
                creditCardDebt: { amount: state.creditCardDebt.amount + action.payload }
            }
        case WITHDRAW:
            return {
                ...state,
                checkingAccount: { amount: state.checkingAccount.amount - action.payload }
            }
        default:
            return state
    }
}