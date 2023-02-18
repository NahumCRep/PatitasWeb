import React from 'react'
import { Form, Formik } from 'formik'
import * as Yup from "yup";
import { InputField } from '../../form-fields/InputField';
import { Loader } from '../../ui';

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
                enableReinitialize
                validationSchema={userValidationSchema}
                onSubmit={({name, email}, { setSubmitting, resetForm }) => {
                    const resp = handleSubmit({name, email})
                    resp.then(res => {
                        setSubmitting(false)
                        resetForm()
                    })                
                }}
            >
                {({ isSubmitting }) => (
                    <Form className='grid grid-cols-1 md:grid-cols-2 gap-3 mt-5'>
                        <InputField label={'Nombre'} name='name' type='text' />
                        <InputField label={'Correo'} name='email' type='email' />
                        <button 
                            type='submit' 
                            disabled={isSubmitting}
                            className='md:col-start-2 py-2 border-2 border-slate-100 rounded-md
                            flex items-center justify-center 
                            transition-colors duration-200 hover:bg-slate-100'
                        >
                            {
                                isSubmitting 
                                ? <Loader />
                                : 'Guardar'
                            }
                        </button>
                    </Form>
                )}
            </Formik>
        </section>
    )
}
