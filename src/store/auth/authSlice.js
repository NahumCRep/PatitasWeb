import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name:'auth',
    initialState:{
        status: false, // checkin, authenticated, not-authenticated
        user: {},
        errorMessage: undefined
    },
    reducers:{
        onChecking:(state) => {
            state.status = 'checking';
        },
        onLogin:(state, {payload}) => {
            state.status = 'authenticated';
            state.user = payload;
            state.errorMessage = undefined;
        },
        onLogout:(state, {payload}) => {
            state.status = 'not-authenticated';
            state.user = {};
            state.errorMessage = payload;
        }
    }
})

export const {onChecking, onLogin, onLogout} = authSlice.actions;