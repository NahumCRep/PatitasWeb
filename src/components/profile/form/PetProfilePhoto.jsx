import React, { useEffect } from 'react';
import { usePetStore } from '../../../hooks';

import dogDefaultImage from '../../../assets/images/dogDefaultImg.jpg';
import catDefaultImage from '../../../assets/images/catDefaultImg.jpg';

export const PetProfilePhoto = ({pet}) => {
  const { image, startUploadingPetImage, startPreviewImgFile } = usePetStore();

  useEffect(() => {
    startPreviewImgFile();
  },[pet])

  const onChangePetImage = ({target}) => {
    console.log(target.files[0])
    startPreviewImgFile(target.files[0])
  }

  return (
    <div className='w-full h-80 md:w-[40%] md:pr-5'>
      <figure className='w-full h-[80%]'>
        {
          image 
          ? (
              <img 
              src={image} 
              className="w-full h-full object-cover"
              alt={`${pet} default image`} 
              />
          ) : (
              <img 
              src={pet ? dogDefaultImage : catDefaultImage} 
              className="w-full h-full object-cover"
              alt={`${pet} default image`} 
              />
          )
        }
      </figure>

      <label
        htmlFor='petImg'
        className="w-full h-10 mt-5 flex items-center justify-center font-secondary text-white bg-plt-blue rounded-xl cursor-pointer
          transition-colors duration-200 hover:bg-plt-darkblue"
        
      >
        subir imagen
      </label>

      <input id='petImg' type="file" className='hidden' onChange={onChangePetImage} />

    </div>
  )
}
