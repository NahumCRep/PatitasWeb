import React from 'react'

export const ExtraImage = ({imageSrc}) => {
  return (
    <div className='h-52 bg-slate-400'>
          <img src={imageSrc} className='w-full h-full object-cover' />
    </div>
  )
}
