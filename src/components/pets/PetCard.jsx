import React from 'react'
// ** Icons
import { TbGenderMale, TbGenderFemale } from 'react-icons/tb';
import { BsBookmarkHeartFill } from 'react-icons/bs';
import dogcard from '../../assets/images/dogcard.jpg'


export const PetCard = ({pet}) => {
  return (
    <div className={`h-60 relative font-secondary font-semibold bg-white rounded-xl overflow-hidden transition-colors duration-500
      before:content-[''] before:w-full before:h-1/3 before:absolute before:top-0 before:left-0 before:z-0 
      ${pet.pet === 'perro' ? ' border-2 before:bg-plt-blue hover:border-plt-blue':'border-2 before:bg-plt-cream hover:border-plt-cream'}`}>
      
      <div className="w-full h-full px-2 py-1 relative z-10">
        <figure className="w-full h-2/3 ">
          <img src={dogcard} alt="dog" className="w-full h-full rounded-xl object-contain" />
        </figure>

        <div className="relative w-full h-full">
            <button className="absolute top-0 right-0 text-slate-400">
              <BsBookmarkHeartFill size={25} />
            </button>
            <p className="flex items-center gap-2">
                {pet.name}
                {
                    pet.genre === 'macho'
                        ? <TbGenderMale color='#185ADB' />
                        : <TbGenderFemale color='#E848F3' />
                }
            </p>

            <div className="font-medium text-[0.7rem] text-slate-400">
              <p>{pet.age}</p>
              <p>{pet.breed}</p>
              <p>{pet.location}</p>
            </div>

        </div>
      </div>
        
    </div>
  )
}
