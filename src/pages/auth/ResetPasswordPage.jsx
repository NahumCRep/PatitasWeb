import React, { useState, useEffect } from 'react'
import { useAuthStore } from '../../hooks/useAuthStore'
import { useParams, useNavigate } from 'react-router-dom'
import { Formik, Form } from 'formik'
import { PasswordField } from '../../components/form-fields'
import { Loader } from '../../components/ui'
import * as Yup from 'yup'

export const ResetPasswordPage = () => {
  const [isSuccess, setSuccess] = useState(false)
  const {id, token} = useParams()
  const { startResetPassword } = useAuthStore()
  const navigate = useNavigate()

  useEffect(() => {
    if(!isSuccess) return 
    
    let redirect = setTimeout(() => {
      navigate('/login')
    },2000)

    return () => clearInterval(redirect)
  },[isSuccess])

  const handleFormSubmit = (values) => {
    const resp = startResetPassword({
      id, 
      token, 
      password: values.password
    })
    return resp
  }

  const validationFormSchema = Yup.object().shape({
    password: Yup.string().required('ingrese una contraseña').min(6, 'debe ser de al menos 6 caracteres'),
    confirmPassword: Yup.string().required('ingrese la nueva contraseña')
        .oneOf([Yup.ref('password'), null], 'debe coincidir con la nueva contraseña')
  })

  return (
    <div className='w-screen flex justify-center'>
      <div className='w-[90%] md:w-2/4 md:min-w-[300px] bg-slate-50 p-8 font-secondary
        mt-8 rounded-md outline-dashed outline-2 outline-plt-cream/70 outline-offset-4
        shadow-md'>
        <Formik
          initialValues={{password: '', confirmPassword: ''}}
          validationSchema={validationFormSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            const resp = handleFormSubmit(values)
            resp.then(res => {
              setSubmitting(false)
              resetForm()
              if(res.ok){
                setSuccess(true)
              }
            })
          }}
        >
          {({ isSubmitting }) => (
            <Form className='flex flex-col gap-4'>
              <div>
                <h1 className='font-primary text-3xl text-plt-blue'>Patitas</h1>
                <h2 className='text-xl font-medium mt-4'>Establecer Nueva Contraseña</h2>
                <hr />
              </div>
              <PasswordField
                label="nueva contraseña"
                name={'password'}
                className={'formField pr-8'}
              />
              <PasswordField
                label="confirmar contraseña"
                name={'confirmPassword'}
                className={'formField pr-8'}
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
              <div>
                {
                  isSuccess &&
                    <p className='text-sm mt-2'>
                      Se establecion la nueva contraseña correctamente
                    </p>
                }
                    
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}
