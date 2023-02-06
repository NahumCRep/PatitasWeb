import React from 'react'

export const PetInfoField = ({field, value}) => {
  return (
    <div className="text-lg md:text-sm grid grid-cols-3">
        <p className="text-slate-400">
            {field} 
        </p>
        <p className='col-span-2'>
            {value}
        </p> 
    </div>
  )
}
