import React from 'react'
import { useField } from 'formik'


export const InputField = ({ label, ...props }) => {
    const [field, meta] = useField(props.name);
    return (
        <div className="h-20">
            <label htmlFor={props.name}>{label}</label>
            <input {...field} className={`formField ${meta.touched && meta.error ? 'inputError':''}`} />
            {
                meta.touched && meta.error 
                ? <div className="text-red-500 text-sm">{meta.error}</div>
                : null
            }
        </div>
    )
}
