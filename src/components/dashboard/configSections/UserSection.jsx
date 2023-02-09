import React from 'react'
import { Formik } from 'formik'
import * as Yup from "yup";
import { InputField } from '../../form-fields/InputField';

export const UserSection = ({ formValues, handleSubmit }) => {
    
    const userValidationSchema = Yup.object().shape({
        name: Yup.string().required('debe ingresar su nombre'),
        email: Yup.string().email('ingrese un correo valido').required('debe ingresar su correo')
    })
    return (
        <section className='font-secondary'>
            <h2 className='text-xl'>Datos de Usuario</h2>
            <hr />
            <Formik
                initialValues={formValues}
                validationSchema={userValidationSchema}
                onSubmit={(values, {isSubmitting}) => {

                }}
            >
                {({ isSubmitting }) => (
                    <form className='grid grid-cols-1 md:grid-cols-2 gap-3 mt-5'>
                        <InputField label={'Nombre'} name='name' type='text' />
                        <InputField label={'Correo'} name='email' type='email' />
                        <button 
                            type='submit' 
                            className='md:col-start-2 py-2 border-2 border-slate-100 rounded-md 
                            transition-colors duration-200 hover:bg-slate-100'
                        >
                                Guardar
                        </button>
                    </form>
                )}
            </Formik>
        </section>
    )
}
