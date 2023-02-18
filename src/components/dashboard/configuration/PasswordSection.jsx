import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from "yup";
import { InputField, PasswordField } from '../../form-fields';
import { Loader } from '../../ui';

export const PasswordSection = ({ formValues, handleSubmit }) => {

    const passwordValidationSchema = Yup.object().shape({
        currentPassword: Yup.string().required('ingrese la contraseña actual'),
        password: Yup.string().required('ingrese una contraseña').min(6, 'debe ser de al menos 6 caracteres'),
        confirmPassword: Yup.string().required('ingrese nuevamente la contraseña')
            .oneOf([Yup.ref('password'), null], 'debe coincidir con la nueva contraseña')
    })

    return (
        <section className='font-secondary'>
            <h2 className='text-xl'>Contraseña</h2>
            <hr />
            <Formik
                initialValues={formValues}
                validationSchema={passwordValidationSchema}
                onSubmit={({ currentPassword, password }, { setSubmitting, resetForm }) => {
                    const resp = handleSubmit({ currentPassword, password })
                    resp.then(res => {
                        setSubmitting(false)
                        resetForm()
                    })
                }}
            >
                {({ isSubmitting }) => (
                    <Form className='grid grid-cols-1 md:grid-cols-2 gap-3 mt-5'>
                        <PasswordField
                            label={'Contraseña Actual'}
                            name='currentPassword'
                            className={'formField pr-8'}
                        />
                        <div className='col-span-full grid grid-cols-1 md:grid-cols-2 gap-3'>
                            <PasswordField
                                label={'Nueva Contraseña'}
                                name='password'
                                className={'formField pr-8'}
                            />
                            <PasswordField
                                label={'Confirmar Contraseña'}
                                name='confirmPassword'
                                className={'formField pr-8'}
                            />
                            <button
                                type='submit'
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
                        </div>
                    </Form>
                )}
            </Formik>
        </section>
    )
}
