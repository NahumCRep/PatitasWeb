import React from 'react';
import { FaTimes } from '../../utils/reactIcons';
import { usePublicationStore, useAuthStore } from '../../hooks';

export const ExtraImage = ({imageSrc}) => {
  const { startDeleteExtraImage } = usePublicationStore();
  const { user } = useAuthStore();

  const handleDeleteExtraImage = () => {
    startDeleteExtraImage(imageSrc)
  }

  return (
    <div className='group h-52 bg-slate-400 relative'>
          <div className='absolute top-0 left-0 w-full h-full bg-black opacity-25 z-30 
            hidden group-hover:block transition-all duration-500'></div>
          <button type="button"
            className='absolute top-2 right-2 z-50 hidden group-hover:block 
            transition-all duration-500'
            onClick = {handleDeleteExtraImage}
          > 
            <FaTimes className='text-slate-200' size={20} /> 
          </button>
          <img src={imageSrc} className='w-full h-full object-cover' />
    </div>
  )
}
