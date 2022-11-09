import React from 'react';
import { Field, ErrorMessage } from 'formik';

export const InputFormField = ({ name, type, label, touched, errors }) => {
    return (
        <div className="h-16">
            <label htmlFor={name}>{label}</label>
            <Field type={type} name={name} className={`formFieldComponent ${touched.name && errors.name ? 'border-red-500' : ''}`} />
            <ErrorMessage name={name} component="div" className="text-red-500 text-sm" />
        </div>
    )
}
