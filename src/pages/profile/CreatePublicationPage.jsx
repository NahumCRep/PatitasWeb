import React, { useState } from 'react';
import { ProfileLayout } from '../../components/layouts';
import { DefaultImage } from '../../components/profile';

export const CreatePublicationPage = () => {
    const [pet, setPet] = useState("dog");

    const handlePetState = () => {
        pet === 'dog'
            ? setPet('cat')
            : setPet('dog')
    }

    return (
        <ProfileLayout layoutTitle={"Publicación"}>
            <div className='flex flex-col gap-3 md:flex-row'>
                <div className='w-full h-96 md:w-[40%]'>
                    <figure className='w-full h-[80%] bg-yellow-600'>
                        <DefaultImage pet={pet} />
                    </figure>
                    <label 
                        htmlFor='petImg' 
                        className="w-full h-12 mt-5 flex items-center justify-center font-secondary
                         text-white bg-plt-blue rounded-xl cursor-pointer
                         transition-colors duration-200 hover:bg-plt-darkblue"
                     >
                        subir imagen
                    </label>
                    <input id='petImg' type="file" className='hidden' />
                </div>
                <div className="w-full md:w-[60%] font-secondary">
                    <h2>Que tipo de mascota es?</h2>
                    <div className="flex mt-2">
                        <button onClick={() => handlePetState()} className={`w-[7rem] py-1 ${pet === 'dog' ? 'bg-plt-blue text-white':'bg-slate-200 text-slate-400 hover:bg-slate-300' } `}>Perro</button>
                        <button onClick={() => handlePetState()} className={`w-[7rem] py-1 ${pet === 'cat' ? 'bg-plt-cream':'bg-slate-200 text-slate-400 hover:bg-slate-300'} `}>Gato</button>
                    </div>
                </div>
            </div>
        </ProfileLayout>
    )
}
