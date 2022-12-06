import React from 'react';
// ** Hooks
import { useAuthStore } from '../../hooks';
// ** Components
import { Link } from 'react-router-dom';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { AuthLayout } from '../../components/layouts';

export const LoginPage = () => {
  const { startLogin } = useAuthStore();
  
  const handleLogin = (data) => {
    startLogin(data);
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
            console.log(values);
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
              resetForm();
              handleLogin(values);
            }, 400);
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

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full h-14 mt-10 bg-plt-blue text-white transition-colors duration-500 hover:bg-plt-darkblue"
              >
                aceptar
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </AuthLayout>
  )
}
