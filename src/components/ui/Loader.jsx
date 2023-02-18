import React from 'react'

export const Loader = ({color = 'plt-blue'}) => {
  return (
    <div className={`w-7 h-7 border-4 border-t-transparent
     border-${color} rounded-full animate-spin`}></div>
  )
}
