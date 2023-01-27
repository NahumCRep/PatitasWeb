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
    extra_images: []
}

export const publicationSlice = createSlice({
    name: 'publication',
    initialState: {
        image: '',
        activePublication: publicationInitialValues,
        extraImages: [],
        publications: []
    },
    reducers: {
        onPreviweImage: (state, { payload }) => {
            state.image = payload;
        },
        onClearPreviewImage: (state) => {
            state.image = '';
            state.extraImages = [];
        },
        onPreviewExtraImages: (state, { payload }) => {
            state.extraImages.push(...payload);
        },
        onDeleteExtraImage: (state, { payload }) => {
            state.extraImages = state.extraImages.filter(extra => extra !== payload);
        },
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
        }
    }
})

export const {
    onPreviweImage,
    onClearPreviewImage,
    onPreviewExtraImages,
    onDeleteExtraImage,

    onSetPublications,
    onSetActivePublication,
    onClearActivePublication,
    onSetProfilePetPhoto,
    onSetPublicationExtraImages
} = publicationSlice.actions;