import React from 'react';
// ** Hooks
import { useAuthStore } from '../../hooks';
// ** Components
import { Link } from 'react-router-dom';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { AuthLayout } from '../../components/layouts';
import { Loader } from '../../components/ui';

export const LoginPage = () => {
  const { startLogin, errorMessage } = useAuthStore();
  
  const handleLogin = (data) => {
    const {email, password} = data;
    const resp = startLogin({email, password});
    return resp
  }

  return (
    <AuthLayout tlwBgColor={'bg-plt-blue'}>
      <div className="w-full px-4 font-secondary font-semibold md:px-20">
        <h1 className="text-4xl text-plt-dark">Login</h1>
        <p className="text-gray-400 mt-1">
          No tienes cuenta ?
          <Link
            to="/register"
            className="text-plt-blue ml-2 transition-colors duration-300 hover:text-plt-darkblue"
          >
            registrarme
          </Link>
        </p>
        <Formik
          initialValues={{ email: '', password: '' }}
          validate={values => {
            const errors = {};
            if (!values.email) {
              errors.email = 'ingrese el correo'
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
              errors.email = 'correo no valido'
            } 

            if (!values.password) {
              errors.password = 'ingrese la contraseña'
            }

            return errors;
          }}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            const resp = handleLogin(values);
            resp.then(res => {
              setSubmitting(false);
              resetForm();
            })
          }}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form className="text-plt-dark mt-8 flex flex-col gap-2">
              <div className='h-24'>
                <label htmlFor="email" className="block text-sm text-gray-600">correo</label>
                <Field type="email" name="email" className={`w-full mt-1 p-2 border-2 text-sm font-normal ${touched.email && errors.email ? 'border-red-500':'border-plt-blue'}`} />
                <ErrorMessage name="email" component="div" className="text-red-500 text-xs" />
              </div>
              
              <div className="h-24">
                <label htmlFor="password" className="block text-sm text-gray-600">contraseña</label>
                <Field type="password" name="password" className={`w-full mt-1 p-2 border-2 ${touched.password && errors.password ? 'border-red-500':'border-plt-blue'}`} />
                <ErrorMessage name="password" component="div" className="text-red-500 text-xs" />
              </div>

              <div className='flex items-center justify-between text-sm text-gray-400'>
                  <label htmlFor="rememberme" className='flex items-center gap-2'>
                    <input type="checkbox" name='rememberme' />
                    recordarme
                  </label>
                  <Link to={"/forgot_password"}>olvidaste tu contraseña ?</Link>
              </div>
              
              {
                errorMessage && 
                <small className='w-full p-2 mt-2 text-center text-slate-50 bg-red-400'>
                  {errorMessage}
                </small>
              }

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full h-12 rounded-md mt-5 bg-plt-blue text-white transition-colors 
                  duration-500 hover:bg-plt-darkblue flex items-center justify-center"
              >
                {
                  isSubmitting
                    ? <Loader />
                    : 'aceptar'
                }
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </AuthLayout>
  )
}
