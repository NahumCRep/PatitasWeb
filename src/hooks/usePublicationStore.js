import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom'
import patitasApi from "../api/patitasApi";
import { readFile } from "../helpers";
import { 
    onPreviweImage, 
    onClearPreviewImage, 
    onPreviewExtraImages,
    onDeleteExtraImage,
    onSetPublications,
    onSetActivePublication,
    onClearActivePublication,
    onSetProfilePetPhoto,
    onSetPublicationExtraImages
} from '../store/pet';

export const usePublicationStore = () => {
    const navigate = useNavigate();
    const { image, extraImages, publications, activePublication } = useSelector(state => state.publication);
    const dispatch = useDispatch();

    const startCreatePublication = async (publication) => {
        if(publication._id){
            const res = await patitasApi.put(`/publication/update/${publication._id}`, publication)
            console.log('publication resp', res);
            dispatch(onClearActivePublication())
            navigate('/perfil/publicaciones')
        }else{
            const res = await patitasApi.post('/publication/new', publication);
            console.log('publication resp', res);
        } 
    }

    const startGetPublicationsByUser = async (userId) => {
        const res = await patitasApi.get(`/publication/user/${userId}`);
        dispatch(onSetPublications(res.data.publications))
    }

    const startGetPublicationById = async (publicationId) => {
        dispatch(onClearActivePublication());
        const res = await patitasApi.get(`/publication/${publicationId}`);
        dispatch(onSetActivePublication(res.data.publication));
    }

    const startClearActivePublication = () => {
        dispatch(onClearActivePublication())
    }

    const startPreviewImgFile = async (file) => {
        if(!file) return;

        const profilePhoto = await readFile(file)
        dispatch(onSetProfilePetPhoto(profilePhoto))
    }

    const startClearPreviewImage = () => {
        dispatch(onClearPreviewImage())
    }

    const startReadAllFiles = async (files) => {
        const filePromises = [];
        for(const file of files){
            filePromises.push(readFile(file))
        }

        const extraImages = await Promise.all(filePromises)
        dispatch(onSetPublicationExtraImages(extraImages));    
    }

    const startUploadingPetImage = async (imageFile) => {
        try {
            const {data} = await patitasApi.post('/pet/image', {"file": imageFile});
            console.log(data);

        } catch (error) {
            console.log(error);
        }
    }

    const startDeleteExtraImage = (image) => {
        if(!image) return;
        dispatch(onDeleteExtraImage(image));
    }

    return {
        image,
        extraImages,
        publications,
        activePublication,
        startCreatePublication,
        startClearActivePublication,
        startGetPublicationsByUser,
        startGetPublicationById, 
        startUploadingPetImage,
        startPreviewImgFile,
        startClearPreviewImage,
        startReadAllFiles,
        startDeleteExtraImage
    }
}
