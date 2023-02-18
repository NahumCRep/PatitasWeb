import React from 'react'
import { FaPaw, FaHeart } from 'react-icons/fa';

export const Counter = ({type, amount}) => {
  return (
    <div>
        <div className="flex gap-2">
            <div className="h-auto flex items-center justify-center text-plt-cream text-5xl">
                {type === 'available' 
                    ? <FaPaw /> 
                    : <FaHeart />
                }     
            </div>
            <div className="flex flex-col font-semibold">
                <span className="text-xl text-plt-blue">Patitas</span>
                <span className="text-2xl text-plt-dark">{type === 'available' ? 'Disponibles':'Adoptadas'}</span>
            </div>
        </div>
        <p className="text-black text-6xl md:text-7xl pl-1 font-secondary">
            {
                amount > 100
                ? '+100'
                : amount
            }
        </p>
    </div>
  )
}
