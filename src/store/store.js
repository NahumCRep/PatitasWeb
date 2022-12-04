import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
import { petSlice } from "./pet/petSlice";


export const store = configureStore({
    reducer:{
        auth: authSlice.reducer,
        pet: petSlice.reducer
    }
})