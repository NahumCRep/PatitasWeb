import React from 'react'

export const InputField = ({label, name, type, value, changeInput, errorMessage}) => {
  return (
    <div className="font-secondary font-semibold text-plt-dark">
        <label htmlFor={name} className="text-lg text-plt-blue">{label}</label>
        <input 
            name={name}
            type={type}
            value={value}
            onChange={changeInput}
            className={`w-full mt-1 p-2 border-2 bg-gray-100 ${errorMessage ? 'border-red-500':'border-plt-blue'}`} 
        />
        <p className="text-red-500 mt-1 text-sm">{errorMessage && errorMessage}</p>
    </div>
  )
}
