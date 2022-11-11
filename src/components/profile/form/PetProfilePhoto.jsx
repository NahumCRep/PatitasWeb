import React from 'react'

import dogDefaultImage from '../../../assets/images/dogDefaultImg.jpg';
import catDefaultImage from '../../../assets/images/catDefaultImg.jpg';

export const PetProfilePhoto = ({pet}) => {
  return (
    <div className='w-full h-80 md:w-[40%] pr-5'>
      <figure className='w-full h-[80%]'>
        <img 
            src={pet ? dogDefaultImage : catDefaultImage} 
            className="w-full h-full object-cover"
            alt={`${pet} default image`} 
        />
      </figure>

      <label
        htmlFor='petImg'
        className="w-full h-10 mt-5 flex items-center justify-center font-secondary text-white bg-plt-blue rounded-xl cursor-pointer
          transition-colors duration-200 hover:bg-plt-darkblue"
      >
        subir imagen
      </label>

      <input id='petImg' type="file" className='hidden' />

    </div>
  )
}
