import { creditCardActions } from "./features/creditCardSlice.js";
import store from "./store.js";

const { payWithCreditCard } = creditCardActions

const { subscribe, dispatch, getState } = store

const unsubscribe = subscribe(() => console.log(getState()))

dispatch(payWithCreditCard(3))

unsubscribe()