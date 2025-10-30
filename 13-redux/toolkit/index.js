import { creditCardActions } from "./features/creditCardSlice.js";
import { checkingAccountActions } from "./features/checkingAccountSlice.js";
import store from "./store.js";
import { fetchUsers } from "./features/usersSlice.js";

const { payWithCreditCard, addToBlack, addToGold, removeFromLists } = creditCardActions
const { withdrawMoney } = checkingAccountActions

const { subscribe, dispatch, getState } = store

const unsubscribe = subscribe(() => console.log(getState()))

dispatch(payWithCreditCard(3))
dispatch(withdrawMoney(3))
dispatch(addToBlack())
dispatch(addToGold())
dispatch(removeFromLists())
dispatch(fetchUsers())

// unsubscribe()