import { configureStore } from "@reduxjs/toolkit";
import { creditCardReducer } from "./features/creditCardSlice.js";



export default configureStore({
    reducer: {
        creditCard: creditCardReducer
    }
})

