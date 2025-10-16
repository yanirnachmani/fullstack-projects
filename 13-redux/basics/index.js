import { WITHDRAW, CREDIT_CARD_PAYMENT } from "./actions.js";
import store from "./store.js";

const { subscribe, getState, dispatch } = store

const unsubscribe = subscribe(() => console.log(getState()))
const unsub = setInterval(() => {
    dispatch(WITHDRAW)
    dispatch(CREDIT_CARD_PAYMENT)
}, 5000)

setTimeout(() => {
    clearInterval(unsub)
    unsubscribe()
}, 16000)


