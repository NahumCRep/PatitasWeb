import React from 'react'
import { FaTimes, IoIosArrowBack, IoIosArrowForward } from '../../utils/reactIcons'

export const ModalSlider = ({
    imageSelected, 
    imageList, 
    isOpen, 
    closeModal,
    handleSlider
}) => {
  
  if(!isOpen){
    return null
  }

  return (
    <div className='fixed top-0 left-0 w-screen h-screen z-50 bg-black/70 
        text-white flex items-center justify-center'>
        <div className='relative w-[90%] md:w-1/2 bg-white'>
          <button
              onClick={closeModal} 
              className='absolute -top-8 right-0 text-white'>
              <FaTimes size={30} />
          </button>

            <img 
              src={imageList[imageSelected]} 
              alt="imagen adicional de la mascota"
              className='object-cover'
            />

            <button 
              className='absolute left-0 top-1/2 md:-left-9 text-white'
              onClick={() => handleSlider('prev', imageSelected)}  
            >
                <IoIosArrowBack size={30} />
            </button>
            <button 
              className='absolute right-0 md:-right-9 top-1/2 text-white'
              onClick={() => handleSlider('next', imageSelected)}
            >
                <IoIosArrowForward size={30} />
            </button>

        </div>
    </div>
  )
}
