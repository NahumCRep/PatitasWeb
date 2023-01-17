import React from 'react';
import { FaPlus } from '../../utils/reactIcons';
import { usePublicationStore } from '../../hooks';
import { ExtraImage } from './ExtraImage';

export const ExtraImagesForm = () => {
    const { extraImages, startReadAllFiles } = usePublicationStore();
    

    const onChangeInputFile = ({target}) => {
        console.log(target.files)
        startReadAllFiles(target.files)
        
    }

    return (
        <div className="w-full mt-5">
            <div className='flex items-center gap-2'>
                Imagenes adicionales
                <label htmlFor='extraImgs' className='text-slate-400 bg-slate-200 w-7 h-7 flex items-center justify-center cursor-pointer transition-colors duration-200 hover:bg-slate-300'>
                    <FaPlus size={15} />
                </label>
                <input 
                    type="file" 
                    id="extraImgs" 
                    className='hidden' 
                    onChange={onChangeInputFile}
                    multiple
                />
            </div>
            <hr className='mt-2' />
            <div className='mt-3 w-full grid grid-cols-5 gap-3'>
                {
                    extraImages && extraImages.map((extraImage) => (
                        <ExtraImage key={extraImage} imageSrc={extraImage} />
                    ))
                }
            </div>
        </div>
    )
}
