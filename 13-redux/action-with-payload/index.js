import { withdrawAction, creditCardPaymentAction } from "./actions.js";
import store from "./store.js";

const { subscribe, getState, dispatch } = store

const unsubscribe = subscribe(() => console.log(getState()))
const unsub = setInterval(() => {
    dispatch(withdrawAction())
    dispatch(creditCardPaymentAction(40))
}, 5000)

setTimeout(() => {
    clearInterval(unsub)
    unsubscribe()
}, 16000)


