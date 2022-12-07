import React from 'react';
import { Field, useField } from 'formik';

export const SelectField = ({ name, options }) => {
    const [meta] = useField(name);
    return (
        <div>
            <Field as="select" name={name} className={`inline-block cursor-pointer formField ${meta.touched && meta.error ? 'inputError':''}`}>
                <option disabled value="">Seleccionar...</option>
                {
                    options.map((optionItem) => (
                        <option key={optionItem} value={optionItem}> {optionItem} </option>
                    ))
                }
            </Field>
        </div>
    )
}
