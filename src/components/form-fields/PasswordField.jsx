import React, { useState } from 'react'
import { useField } from 'formik'
import { FaEye, FaEyeSlash } from '../../utils/reactIcons'


export const PasswordField = ({ label, className, ...props }) => {
    const [field, meta] = useField(props.name)
    const [showPassword, setShowPassword] = useState(false)

    const handleShowPassword = () => {
        setShowPassword(showPassword => !showPassword)
    }


    return (
        <div className="h-20">
            <label className='text-sm' htmlFor={props.name}>{label}</label>
            <div className='relative'>
                <input 
                    type={showPassword ? 'text':'password'} 
                    {...field} 
                    className={`${className} ${meta.touched && meta.error ? 'inputError':''}`} 
                />
                <button 
                    type='button'
                    onClick={handleShowPassword} 
                    className='absolute right-2 top-1/2 -translate-y-1/2 
                    outline-none border-none bg-none pt-1 text-slate-300 hover:text-slate-400'>
                    {
                        showPassword 
                        ? <FaEyeSlash size={20} />
                        : <FaEye size={20} />
                    }
                </button>
            </div>
            {
                meta.touched && meta.error 
                ? <div className="text-red-500 text-sm">{meta.error}</div>
                : null
            }
        </div>
    )
}