import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';
import { usePublicationStore, useAuthStore } from '../../hooks';
// ** Icons
import { 
  TbGenderMale, TbGenderFemale, 
  AiOutlineHeart, AiFillHeart, 
  MdLocationOn 
} from '../../utils/reactIcons'



export const PetCard = ({ pet }) => {
  const [isLiked, setIsLiked] = useState(false)
  const { user } = useAuthStore()
  const { startHandleLike } = usePublicationStore()
  const baseUrl = pet.pet === 'perro' ? 'perros' : 'gatos';

  const handlePublicationLike = () => {
    if(!user.uid){
      Swal.fire(
        'Atencion!',
        `Inicie sesion para agregar a favoritos`,
        `info`
      )
    }else{
      startHandleLike(pet._id, user.uid)
    }
  }

  useEffect(() => {
    if(pet.likes.includes(user.uid)){
      setIsLiked(true)
    }else{
      setIsLiked(false)
    }
  }, [pet.likes])

  return (
    <div className={`h-60 relative font-secondary font-semibold bg-white shadow-lg rounded-t-md overflow-hidden transition-colors duration-500`}>

      <figure className="w-full h-[80%] ">
        <Link to={`/${baseUrl}/informacion/${pet._id}`}>
          <img src={pet.image} alt="dog" className="w-full h-full rounded-t-md object-cover" />
        </Link>
      </figure>

      <div className="w-full h-[20%] px-2 flex items-center justify-between">
        <div className="w-[80%]">
          <p className="flex items-center gap-2 text-base">
            {pet.name}
            {
              pet.genre === 'macho'
                ? <TbGenderMale color='#185ADB' />
                : <TbGenderFemale color='#E848F3' />
            }
          </p>
          <p className="w-[95%] font-medium text-[0.7rem] text-slate-400 flex items-center justify-start text-ellipsis truncate">
            <MdLocationOn />
            {pet.location.province}
          </p>
        </div>

        <button
          onClick={handlePublicationLike} 
          title={'agregar a favoritos'} 
          className={`:transition-colors duration-200 lg:hover:text-slate-500
                ${isLiked ? 'text-red-500':'text-slate-400'}`}
        >
          <AiFillHeart size={27} />
        </button>
      </div>
    </div>
  )
}
