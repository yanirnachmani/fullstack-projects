import { WITHDRAW, CREDIT_CARD_PAYMENT } from "./actions.js";
import store from "./store.js";

const { subscribe, getState, dispatch } = store

const unsubscribe = subscribe(() => console.log(getState()))
dispatch(WITHDRAW)
dispatch(CREDIT_CARD_PAYMENT)
unsubscribe()