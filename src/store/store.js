import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
import { publicationSlice } from "./pet/publicationSlice";


export const store = configureStore({
    reducer:{
        auth: authSlice.reducer,
        publication: publicationSlice.reducer
    }
})