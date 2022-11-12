import React from 'react'

export const PetGrid = ({children}) => {
  return (
    <div className="grid grid-cols-2 gap-5 p-5 md:grid-cols-3">
        {children}
    </div>
  )
}
