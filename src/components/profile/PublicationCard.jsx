import React from 'react'
import { Link } from 'react-router-dom'

export const PublicationCard = ({publication}) => {
  return (
    <div className='bg-slate-100 p-1 shadow-md border-[1px]'>
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
