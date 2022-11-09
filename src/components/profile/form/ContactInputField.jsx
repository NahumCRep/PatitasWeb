import { ErrorMessage, Field } from 'formik'
import React from 'react'

export const ContactInputField = ({name, type, label, children, isRequired = false, touched, errors}) => {
    return (
        <div className="mt-3">
            <label htmlFor={name} className="flex items-center gap-2">
                {/* children is for icon element */}
                {children}
                {label}
                {
                    isRequired 
                        ? <p className='text-sm text-slate-400'>(obligatorio)</p>
                        : <p className='text-sm text-slate-400'>(opcional)</p>
                }
            </label>
            <Field type={type} name={name} className="formFieldComponent" />
            <ErrorMessage name={name} component='div' className="text-red-500 text-sm" />
        </div>
    )
}
