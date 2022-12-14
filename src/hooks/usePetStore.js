import { useDispatch, useSelector } from "react-redux";
import patitasApi from "../api/patitasApi";
import { readFile } from "../helpers";
import { 
    onPreviweImage, 
    onClearPreviewImage, 
    onPreviewExtraImages,
    onDeleteExtraImage 
} from '../store/pet';

export const usePetStore = () => {
    // const [petImg, setPetImg] = useState('');
    const { image, extraImages } = useSelector(state => state.pet);
    const dispatch = useDispatch();

    const startPreviewImgFile = async (file) => {
        // if(!file){
        //     return dispatch(onClearPreviewImage())
        // };
        // const reader = new FileReader();
        // reader.readAsDataURL(file);

        // reader.onloadend = () => {
        //     dispatch(onPreviweImage(reader.result))
        // }
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
        startUploadingPetImage,
        startPreviewImgFile,
        startClearPreviewImage,
        startReadAllFiles,
        startDeleteExtraImage
    }
}
