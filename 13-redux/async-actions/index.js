import { getUsersReqAction, postUsersReqAction } from "./actions.js";
import store from "./store.js";

const { subscribe, getState, dispatch } = store

const unsubscribe = subscribe(() => console.log(getState()))
const unsub = setInterval(() => {
    dispatch(getUsersReqAction())
    dispatch(postUsersReqAction([1, 5, 6]))
}, 1000)

setTimeout(() => {
    clearInterval(unsub)
    unsubscribe()
}, 1500)


