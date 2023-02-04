import { createSlice } from "@reduxjs/toolkit";
import { districts, provinces } from "../../utils/location";

const publicationInitialValues = {
    name: '',
    breed: '',
    genre: 'macho',
    ageNumber: 0,
    ageString: '',
    location: {
        province: provinces[0],
        district: districts[provinces[0]][0]
    },
    description: '',
    contact: {
        whatsapp: '',
        email: ''
    },
    image: '',
    extra_images: [],
    is_adopted: false
}

export const publicationSlice = createSlice({
    name: 'publication',
    initialState: {
        activePublication: publicationInitialValues,
        publications: [],
        publicationsData: {}
    },
    reducers: {
        onSetPublications: (state, { payload }) => {
            state.publications = payload;
        },
        onSetActivePublication: (state, { payload }) => {
            state.activePublication = payload;
        },
        onClearActivePublication: (state) => {
            state.activePublication = publicationInitialValues
        },
        onSetProfilePetPhoto: (state, { payload }) => {
            state.activePublication.image = payload;
        },
        onSetPublicationExtraImages: (state, { payload }) => {
            state.activePublication.extra_images.push(...payload);
        },
        onDeleteExtraImage: (state, { payload }) => {
            state.activePublication.extra_images = state.activePublication.extra_images.filter(extra => extra !== payload);
        },
        onSetPublicationsData: (state, { payload }) => {
            state.publicationsData = payload;
        }
    }
})

export const {
    onSetPublications,
    onSetActivePublication,
    onClearActivePublication,
    onSetProfilePetPhoto,
    onSetPublicationExtraImages,
    onDeleteExtraImage,
    onSetPublicationsData
} = publicationSlice.actions;