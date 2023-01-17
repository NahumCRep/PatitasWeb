import { useDispatch, useSelector } from "react-redux";
import patitasApi from "../api/patitasApi";
import { readFile } from "../helpers";
import { 
    onPreviweImage, 
    onClearPreviewImage, 
    onPreviewExtraImages,
    onDeleteExtraImage,
    onSetPublications 
} from '../store/pet';

export const usePublicationStore = () => {
    // const [petImg, setPetImg] = useState('');
    const { image, extraImages, publications } = useSelector(state => state.publication);
    const dispatch = useDispatch();

    const startCreatePublication = async (publication) => { 
        const res = await patitasApi.post('/publication/new', publication);
        console.log('publication resp', res);
    }

    const startGetPublicationsByUser = async (userId) => {
        const res = await patitasApi.get(`/publication/user/${userId}`);
        dispatch(onSetPublications(res.data.publications))
        console.log('publications by user', res);
        console.log('publications by user publ', res.data.publications);
    }

    const startPreviewImgFile = async (file) => {
        if(!file) return;

        const profilePhoto = await readFile(file)
        dispatch(onPreviweImage(profilePhoto))
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
        dispatch(onPreviewExtraImages(extraImages));    
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
        startCreatePublication,
        startGetPublicationsByUser,
        startUploadingPetImage,
        startPreviewImgFile,
        startClearPreviewImage,
        startReadAllFiles,
        startDeleteExtraImage
    }
}
