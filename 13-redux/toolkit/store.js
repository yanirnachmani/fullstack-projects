import { configureStore } from "@reduxjs/toolkit";
import { creditCardReducer } from "./features/creditCardSlice.js";
import { checkingAccountReducer } from "./features/checkingAccountSlice.js";
import { usersReducer } from "./features/usersSlice.js";



export default configureStore({
    reducer: {
        creditCard: creditCardReducer,
        checkingAccount: checkingAccountReducer,
        users: usersReducer
    }
})

