import React from 'react';
import { Link } from 'react-router-dom';
// ** Icons
import { TbGenderMale, TbGenderFemale } from 'react-icons/tb';
import {AiOutlineHeart, AiFillHeart} from 'react-icons/ai';
import { MdLocationOn } from 'react-icons/md';
import dogcard from '../../assets/images/dogcard.jpg';


export const PetCard = ({ pet }) => {
  const baseUrl = pet.pet === 'perro' ? 'perros' : 'gatos';

  return (
    <div className={`h-80 relative font-secondary font-semibold bg-white shadow-lg rounded-xl overflow-hidden transition-colors duration-500`}>

      <figure className="w-full h-[82%] ">
        <img src={dogcard} alt="dog" className="w-full h-full rounded-xl object-cover" />
      </figure>

      <div className="w-full h-[18%] px-4 flex items-center justify-between">
        <div className="w-[80%]">
          <p className="flex items-center gap-2 text-lg">
            <Link to={`/${baseUrl}/informacion/${pet.id}`}>{pet.name}</Link>
            {
              pet.genre === 'macho'
                ? <TbGenderMale color='#185ADB' />
                : <TbGenderFemale color='#E848F3' />
            }
          </p>
          <p className="w-full font-medium text-[0.8rem] text-slate-400 text-ellipsis truncate flex items-center">
            <MdLocationOn />
            {pet.location}
          </p>
        </div>

        <button title={'agregar a favoritos'} className=" text-slate-400 transitio duration-200 hover:text-slate-500">
          <AiFillHeart size={27} />
        </button>
      </div>
    </div>
  )
}
