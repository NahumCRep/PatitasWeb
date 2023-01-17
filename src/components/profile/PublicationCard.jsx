import React from 'react'
import { Link } from 'react-router-dom'

export const PublicationCard = ({publication}) => {
  return (
    <div className='bg-slate-100 p-1 shadow-md'>
        <figure className='h-[80%] overflow-hidden'>
            <img 
                src={publication.image}
                alt={`foto de ${publication.name}`} 
                className="h-full object-cover hover:scale-110 duration-200"
            />
        </figure>
        <p className='mt-2 pl-1 font-primary text-plt-dark text-center text-sm'>{publication.name}</p>
    </div>
  )
}
