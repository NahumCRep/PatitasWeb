import { useDispatch, useSelector } from "react-redux";
import patitasApi from "../api/patitasApi";
import { readFile } from "../helpers";
import { 
    onDeleteExtraImage,
    onSetPublications,
    onSetActivePublication,
    onClearActivePublication,
    onSetProfilePetPhoto,
    onSetPublicationExtraImages,
    onSetPublicationsData,
    onHandleLike
} from '../store/pet';

export const usePublicationStore = () => {
    const { 
        publications, 
        activePublication, 
        publicationsData 
    } = useSelector(state => state.publication);
    const dispatch = useDispatch();


    // Create | Update
    const startCreatePublication = async (publication) => {
        if(publication._id){
            const res = await patitasApi.put(`/publication/update/${publication._id}`, publication);
            return res.data;
        }else{
            const res = await patitasApi.post('/publication/new', publication);
            return res.data;
        } 
    }

    // Delete or Clear State
    const startDeletePublication = async (publicationId) => {
        const res = await patitasApi.delete(`/publication/delete/${publicationId}`);
        return res.data;
    }
    
    const startDeleteExtraImage = (image) => {
        if(!image) return;
        dispatch(onDeleteExtraImage(image));
    }

    const startClearActivePublication = () => {
        dispatch(onClearActivePublication())
    }

    // Get Publications
    const startGetPublicationsByUser = async (userId) => {
        const res = await patitasApi.get(`/publication/user/${userId}`);
        dispatch(onSetPublications(res.data.publications))
    }

    const startGetPublicationsLikedByUser = async (userId) => {
        const res = await patitasApi.get(`/publication/user/${userId}/likes`);
        dispatch(onSetPublicationsData(res.data));
    }

    const startGetPublicationById = async (publicationId) => {
        dispatch(onClearActivePublication());
        const res = await patitasApi.get(`/publication/${publicationId}`);
        dispatch(onSetActivePublication(res.data.publication));
    }

    const startGetPublications = async ({petType, page = 0, province = ''}) => {
        let query = `/publication/type/${petType}`;

        if(province !== ''){
            query = query + `/province/${province}`
        }

        if(page > 0){
            query = query + `/page/${page}`
        }

        const res = await patitasApi.get(query);
        dispatch(onSetPublicationsData(res.data));
    }
    
    // Files (images)
    const startPreviewImgFile = async (file) => {
        if(!file) return;

        const profilePhoto = await readFile(file)
        dispatch(onSetProfilePetPhoto(profilePhoto))
    }

    const startReadAllFiles = async (files) => {
        const filePromises = [];
        for(const file of files){
            filePromises.push(readFile(file))
        }

        const extraImages = await Promise.all(filePromises)
        dispatch(onSetPublicationExtraImages(extraImages));    
    }

    const startHandleLike = async (publicationId, userId) => {
        const resp = await patitasApi.put(
            `/publication/${publicationId}/like`, 
            {userId: userId}
        )
        if(resp.data.ok){
            dispatch(onHandleLike({publicationId, userId}))
        }
    }

    return {
        // Attributes
        publications,
        activePublication,
        publicationsData,
        // Methods
        startCreatePublication,
        startDeletePublication,
        startGetPublicationById, 
        startGetPublicationsByUser,
        startGetPublicationsLikedByUser, 
        startGetPublications,
        startClearActivePublication,
        startDeleteExtraImage,
        startPreviewImgFile,
        startReadAllFiles,
        startHandleLike
    }
}
