import React from 'react'
import { Formik, Field, ErrorMessage } from 'formik'
import * as Yup from "yup";
import { InputField, PasswordField } from '../../form-fields';

export const PasswordSection = ({ formValues, handleSubmit }) => {


    // TODO: agregar regla para que currentPassword coincida con el valor del formvalues
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
                onSubmit={(values, { isSubmitting }) => {

                }}
            >
                {({ isSubmitting }) => (
                    <form className='grid grid-cols-1 md:grid-cols-2 gap-3 mt-5'>
                        <PasswordField label={'Contraseña Actual'} name='currentPassword' />
                        <div className='col-span-full grid grid-cols-1 md:grid-cols-2 gap-3'>
                            <PasswordField label={'Nueva Contraseña'} name='password' />
                            <PasswordField label={'Confirmar Contraseña'} name='confirmPassword' />
                            <button
                                type='submit'
                                className='md:col-start-2 py-2 border-2 border-slate-100 rounded-md 
                                transition-colors duration-200 hover:bg-slate-100'
                            >
                                Guardar
                            </button>
                        </div>
                    </form>
                )}
            </Formik>
        </section>
    )
}
