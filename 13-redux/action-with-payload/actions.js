import { CREDIT_CARD_PAYMENT, WITHDRAW } from "./types.js";

const withdrawAction = (payload = 1) => {
    return {
        type: WITHDRAW,
        payload
    }
}

const creditCardPaymentAction = (payload = 1) => {
    return {
        type: CREDIT_CARD_PAYMENT,
        payload
    }
}


export { withdrawAction, creditCardPaymentAction }