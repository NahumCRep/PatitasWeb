import React, { useState } from 'react'
import { useAuthStore } from '../../hooks/useAuthStore'
import { Formik, Form } from 'formik'
import { InputField } from '../../components/form-fields'
import { Loader } from '../../components/ui'
import * as Yup from 'yup'

export const ForgotPasswordPage = () => {
    const [isSended, setIsSended] = useState(false)
    const [anyError, setAnyError] = useState({ error: true, message: '' })
    const [emailSended, setEmailSended] = useState('')
    const { startForgotPassword } = useAuthStore()

    const validationFromSchema = Yup.object().shape({
        email: Yup.string()
            .email('el formato de correo no es correcto')
            .required('debe ingresar el correo')
    })

    const sendEmail = (email) => {
        const sended = startForgotPassword(email)
        sended.then(res => {
            if (res.ok) {
                setAnyError({ error: false, message: '' })
                setIsSended(true)
            } else {
                setAnyError({ error: true, message: res.message })
            }
        })

        return sended
    }

    const handleFormSubmit = (email) => {
        setEmailSended(email)
        const resp = sendEmail(email)
        return resp
    }

    const resendEmail = () => {
        if (!emailSended) return
        sendEmail(emailSended)
    }

    const newEmail = () => {
        setEmailSended('')
        setIsSended(false)
        setAnyError({ error: true, message: '' })
    }

    return (
        <div className='w-screen flex justify-center'>
            <div className='w-[90%] md:w-2/4 md:min-w-[300px] bg-slate-50 p-8 font-secondary
                mt-8 rounded-md outline-dashed outline-2 outline-plt-cream/70 outline-offset-4
                shadow-md'>
                {
                    !isSended && anyError.error
                        ? (
                            <Formik
                                initialValues={{ email: '' }}
                                validationSchema={validationFromSchema}
                                onSubmit={({ email }, { setSubmitting, resetForm }) => {
                                    const resp = handleFormSubmit(email)
                                    resp.then(res => {
                                        setSubmitting(false)
                                        resetForm()
                                    })
                                }}
                            >
                                {({ isSubmitting }) => (
                                    <Form>
                                        <p className='text-lg mb-5'>
                                            Para cambiar su contraseña ingrese su correo:
                                        </p>
                                        <InputField
                                            label="correo"
                                            name={'email'}
                                            type={'email'}
                                        />
                                        <div className='flex justify-end'>
                                            <button
                                                type='submit'
                                                disabled={isSubmitting}
                                                className='py-1 w-32 mt-4 bg-plt-cream text-black 
                                                    rounded-md transition-colors flex justify-center
                                                    items-center duration-200 hover:bg-plt-darkcream'
                                            >
                                                {
                                                    isSubmitting 
                                                    ? <Loader />
                                                    : "enviar"
                                                }
                                            </button>
                                        </div>

                                        {
                                            anyError.message !== '' &&
                                            <div className='mt-4 text-red-400 p-2'>
                                                {anyError.message}
                                            </div>
                                        }
                                    </Form>
                                )}
                            </Formik>
                        )
                        : (
                            <div>
                                <h1 className='text-lg font-semibold'>Enviado!!</h1>
                                <p className='text-sm mt-2'>
                                    Verifique en su correo que ha recibido el link que lo llevará
                                    a la página para cambiar su contraseña. <br /> <br />
                                    Si no ha recibido el correo pruebe una de las siguientes opciones:
                                </p>
                                <div className='flex flex-col gap-2 mt-4 md:flex-row'>
                                    <button
                                        className='px-5 py-2 bg-slate-300 rounded-md'
                                        onClick={resendEmail}
                                    >
                                        reenviar
                                    </button>
                                    <button
                                        className='px-5 py-2 bg-slate-200 rounded-md'
                                        onClick={newEmail}
                                    >
                                        ingresar correo nuevamente
                                    </button>
                                </div>
                            </div>
                        )
                }
            </div>
        </div>
    )
}
