import { useEffect, useRef } from 'react';
import { usePublicationStore } from '../../hooks';
import { DefaultImage } from './DefaultImage';
import { BsFillInfoCircleFill } from '../../utils/reactIcons'

export const PetProfilePhoto = ({isDog}) => {
  const { image, activePublication, startPreviewImgFile, startClearPreviewImage } = usePublicationStore();
  const inputFileRef = useRef(null);

  useEffect(() => {
    startClearPreviewImage();
    inputFileRef.current.value = null;
  },[isDog])

  const onChangePetImage = ({target}) => {
    startPreviewImgFile(target.files[0])
  }

  return (
    <div className='w-full h-96 md:w-[40%] md:pr-5'>
      <figure className='w-full h-[70%]'>
        {
          activePublication.image 
          ? (
              <img 
                src={activePublication.image} 
                className="w-full h-full object-cover"
                alt={`${isDog ? 'Foto de perfil del perro':'Foto de perfil del gato'}`} 
              />
          ) : <DefaultImage isDog={isDog} />
        }
      </figure>

      <label
        htmlFor='petImg'
        className="w-full h-10 mt-5 flex items-center justify-center font-secondary text-white bg-plt-blue rounded-xl cursor-pointer
          transition-colors duration-200 hover:bg-plt-darkblue"
      >
        subir imagen
      </label>

      <input 
        ref={inputFileRef} 
        id='petImg' 
        type="file" 
        className='hidden' 
        onChange={onChangePetImage} 
      />

      <div className="flex items-center gap-2 text-slate-400 text-sm mt-4" >
        <BsFillInfoCircleFill size={20} />
        <p>cada una de las imagenes no deben exceder un peso de 10mb</p>
      </div>

    </div>
  )
}
