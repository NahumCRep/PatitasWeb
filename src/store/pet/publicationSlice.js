import { createSlice } from "@reduxjs/toolkit";

export const publicationSlice = createSlice({
    name: 'publication',
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
        extraImages: [],
        publications: []
    },
    reducers:{
        onPreviweImage:(state, {payload}) => {
            state.image = payload;
        },
        onClearPreviewImage:(state) => {
            state.image = '';
            state.extraImages = [];
        },
        onPreviewExtraImages:(state, {payload}) => {
            state.extraImages.push(...payload);
        },
        onDeleteExtraImage:(state, {payload}) => {
            state.extraImages = state.extraImages.filter(extra => extra !== payload);
        },
        onSetPublications:(state, {payload}) => {
            state.publications = payload;
        },
    }
})

export const { 
    onPreviweImage, 
    onClearPreviewImage, 
    onPreviewExtraImages,
    onDeleteExtraImage,
    onSetPublications 
} = publicationSlice.actions;