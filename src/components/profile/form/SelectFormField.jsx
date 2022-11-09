import React from 'react';
import { Field } from 'formik';

export const SelectFormField = ({name, options}) => {
    console.log(options)
  return (
    <div>
        <Field as="select" name={name} className="inline-block cursor-pointer formFieldComponent">
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
