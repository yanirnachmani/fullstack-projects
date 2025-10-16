import { BLACK_CLIENT, CREDIT_CARD_PAYMENT, GOLD_CLIENT, WITHDRAW } from "./types.js";

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

const vipAction = () => ({
    type: GOLD_CLIENT
})

const blackAction = () => ({
    type: BLACK_CLIENT
})


export { withdrawAction, creditCardPaymentAction, vipAction, blackAction }