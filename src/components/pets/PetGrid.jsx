import React from 'react'

export const PetGrid = ({children}) => {
  return (
    <div className="min-h-screen w-full grid grid-cols-2 gap-5 p-5 md:grid-cols-4">
        {children}
    </div>
  )
}
