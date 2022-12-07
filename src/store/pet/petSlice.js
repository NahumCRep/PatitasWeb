import { createSlice } from "@reduxjs/toolkit";

export const petSlice = createSlice({
    name: 'pet',
    initialState:{
        uid: '',
        name:'',
        age: 0,
        breed: '',
        province: '',
        email: '',
        whatsapp: '',
        description: '',
        image: '',
        extraImages: []
    },
    reducers:{
        onPreviweImage:(state, {payload}) => {
            state.image = payload;
        },
        onClearPreviewImage:(state) => {
            state.image = '';
        },
        onPreviewExtraImages:(state, {payload}) => {
            state.extraImages = payload;
        }
    }
})

export const { 
    onPreviweImage, 
    onClearPreviewImage, 
    onPreviewExtraImages 
} = petSlice.actions;