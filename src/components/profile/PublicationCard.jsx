import React from 'react'
import { Link } from 'react-router-dom' 
import { RiHomeHeartFill } from '../../utils/reactIcons'

export const PublicationCard = ({ publication }) => {
  return (
    <div className='bg-slate-100 h-[180px] p-1 shadow-md border-[1px] relative'>
      {
        publication.is_adopted && (
          <div 
            title='adoptado' 
            className='absolute z-50 top-0 right-0 bg-slate-100 
            text-plt-blue shadow-md p-1 rounded-bl-md'
          >
            <RiHomeHeartFill size={25} />
          </div>
        )
      }
      <Link to={`/perfil/publicaciones/${publication._id}`}>
        <figure className='h-[80%] overflow-hidden'>
          <img
            src={publication.image}
            alt={`foto de ${publication.name}`}
            className="w-full h-full object-cover hover:scale-110 duration-200"
          />
        </figure>
        <div className='mt-2 pl-1 font-secondary'>
          <p className={`text-plt-dark text-left text-sm font-semibold border-b-2
              ${publication.pet_type === 'dog' ? 'border-plt-blue ' : 'border-plt-cream'}`
          }>
            {publication.name}
          </p>
        </div>
      </Link>
    </div>
  )
}
