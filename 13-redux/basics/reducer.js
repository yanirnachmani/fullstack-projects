import { CREDIT_CARD_PAYMENT, WITHDRAW } from './actions.js';
import initialState from './state.js'


export default (state = initialState, action) => {
    switch (action.type) {
        case WITHDRAW.type:
            return ({
                ...state,
                checkingAccount: { amount: state.checkingAccount.amount - 15 }
            })
        case CREDIT_CARD_PAYMENT.type:
            return ({
                ...state,
                creditCardDebt: { amount: state.creditCardDebt.amount + 18 }
            })
        default:
            return state
    }
}