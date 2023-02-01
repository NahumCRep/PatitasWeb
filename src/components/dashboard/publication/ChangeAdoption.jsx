import React from 'react'
import { Field } from 'formik'

export const ChangeAdoption = () => {
  return (
    <section className='mt-4 h-16 flex items-center gap-2'>
      <h3 className='font-bold'>Ha sido adoptado ?</h3>
      <label className='flex items-center gap-2'>
        Si
        <Field
          type="checkbox"
          name="is_adopted"
          className="w-5 h-5 cursor-pointer"
        />
      </label>
    </section>
  )
}
