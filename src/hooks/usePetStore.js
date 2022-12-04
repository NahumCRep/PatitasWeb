import { useDispatch, useSelector } from "react-redux";
import { onPreviweImage, onClearPreviewImage } from '../store/pet';
import patitasApi from "../api/patitasApi";

export const usePetStore = () => {
    // const [petImg, setPetImg] = useState('');
    const { image } = useSelector(state => state.pet);
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
        startUploadingPetImage,
        startPreviewImgFile,
        startClearPreviewImage
    }
}
