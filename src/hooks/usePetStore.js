import { useDispatch, useSelector } from "react-redux";
import { onPreviweImage, onClearPreviewImage, onPreviewExtraImages } from '../store/pet';
import patitasApi from "../api/patitasApi";
import { readFile } from "../helpers";

export const usePetStore = () => {
    // const [petImg, setPetImg] = useState('');
    const { image, extraImages } = useSelector(state => state.pet);
    const dispatch = useDispatch();

    const startPreviewImgFile = (file) => {
        if(!file){
            return dispatch(onClearPreviewImage())
        };
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onloadend = () => {
            dispatch(onPreviweImage(reader.result))
        }
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

    return {
        image,
        extraImages,
        startUploadingPetImage,
        startPreviewImgFile,
        startClearPreviewImage,
        startReadAllFiles
    }
}
