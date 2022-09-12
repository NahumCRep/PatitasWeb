import React from 'react'

export const PetGrid = ({children}) => {
  return (
    <div className="grid grid-cols-2 gap-3 p-5 md:grid-cols-4">
        {children}
    </div>
  )
}
