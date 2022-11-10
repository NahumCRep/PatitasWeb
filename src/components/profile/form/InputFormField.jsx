import React from 'react';
import { Field, ErrorMessage } from 'formik';

export const InputFormField = ({ name, type, label, touchedField, errorField }) => {
    return (
        <div className="h-16">
            <label htmlFor={name}>{label}</label>
            <Field type={type} name={name} className={`formFieldComponent ${touchedField && errorField ? 'border-red-500':''}`} />
            {
                touchedField && errorField  
                    ? <ErrorMessage name={name} component="div" className="text-red-500 text-sm" />   
                    : null
            }
        </div>
    )
}
