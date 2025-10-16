import { withdrawAction, creditCardPaymentAction, vipAction, blackAction } from "./actions.js";
import store from "./store.js";

const { subscribe, getState, dispatch } = store

const unsubscribe = subscribe(() => console.log(getState()))
const unsub = setInterval(() => {
    dispatch(withdrawAction(5))
    dispatch(creditCardPaymentAction(22))
    dispatch(vipAction())
}, 5000)

setTimeout(() => {
    clearInterval(unsub)
    unsubscribe()
}, 16000)


