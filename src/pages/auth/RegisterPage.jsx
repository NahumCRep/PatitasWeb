import React from 'react'
// ** Components
import { Link } from 'react-router-dom';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { AuthLayout } from '../../components/layouts';

export const RegisterPage = () => {
  return (
    <AuthLayout tlwBgColor={'bg-plt-cream'}>
      <div className="w-full h-auto overflow-auto px-4 font-secondary font-semibold md:px-20">
        <h1 className="text-4xl text-plt-dark">Registro</h1>
        <p className="text-gray-400 mt-1">
          No tienes cuenta ?
          <Link
            to="/login"
            className="text-plt-blue ml-2 transition-colors duration-300 hover:text-plt-darkblue"
          >
            login
          </Link>
        </p>
        <Formik
          initialValues={{ name: '', email: '', password: '', confirmPassword: '' }}
          validate={values => {
            const errors = {};
            if(!values.name){
              errors.name = 'ingrese su nombre'
            }else if(/[0-9]/i.test(values.name)){
              errors.name = 'el nombre no puede llevar números'
            }

            if (!values.email) {
              errors.email = 'ingrese el correo'
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
              errors.email = 'correo no valido'
            }

            if (!values.password) {
              errors.password = 'ingrese la contraseña'
            } else if (values.password.length < 6) {
              errors.password = 'la contraseña debe ser de 6 caracteres o más'
            }

            if(!values.confirmPassword){
              errors.confirmPassword = 'ingrese nuevamenta la contraseña'
            }else if(values.confirmPassword !== values.password){
              errors.confirmPassword = 'las contraseñas no coinciden'
            }

            return errors;
          }}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            console.log(values);
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
              resetForm();
            }, 400);
          }}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form className="text-plt-dark mt-6 overflow-x-hidden pb-9 flex flex-col gap-2">
              <div className="h-24">
                <label htmlFor="name" className="block text-lg  text-gray-600">nombre</label>
                <Field type="name" name="name" className={`w-full mt-1 p-2 border-2 ${touched.name && errors.name ? 'border-red-500':'border-plt-cream'}`} />
                <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
              </div>

              <div className="h-24">
                <label htmlFor="email" className="block text-lg text-gray-600">correo</label>
                <Field type="email" name="email" className={`w-full mt-1 p-2 border-2 ${touched.email && errors.email ? 'border-red-500':'border-plt-cream'}`} />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
              </div>

              <div className="h-24">
                <label htmlFor="password" className="block text-lg text-gray-600">contraseña</label>
                <Field type="password" name="password" className={`w-full mt-1 p-2 border-2 ${touched.password && errors.password ? 'border-red-500':'border-plt-cream'}`} />
                <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
              </div>

              <div className="h-24">
                <label htmlFor="confirmPassword" className="block text-lg text-gray-600">confirmar contraseña</label>
                <Field type="password" name="confirmPassword" className={`w-full mt-1 p-2 border-2 ${touched.confirmPassword && errors.confirmPassword ? 'border-red-500':'border-plt-cream'}`} />
                <ErrorMessage name="confirmPassword" component="div" className="text-red-500 text-sm" />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-14 mt-4 bg-plt-cream text-plt-dark transition-colors duration-500 hover:bg-plt-darkcream"
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
