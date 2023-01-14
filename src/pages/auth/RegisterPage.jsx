import React from 'react';
import * as Yup from "yup";
// ** Components
import { Link } from 'react-router-dom';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { AuthLayout } from '../../components/layouts';
import { useAuthStore } from '../../hooks';

export const RegisterPage = () => {
  const { startUserRegistration } = useAuthStore();

  const initialValues = { 
    name: '', 
    email: '', 
    password: '', 
    confirmPassword: '' 
  }

  const registerValidationSchema = Yup.object().shape({
    name:  Yup.string().required('debe ingresar el nombre'),
    email: Yup.string().required('debe ingresar el correo').email('ingrese un email valido'),
    password: Yup.string().required('ingrese una contraseña').min(6, 'debe ser de al menos 6 caracteres'),
    confirmPassword: Yup.string().required('ingrese nuevamente la contraseña')
                      .oneOf([Yup.ref('password'), null], 'Las contraseñas deben coincidir')
  })

  const handleFormSubmit = (userFormValues) => {
    const {name, email, password} = userFormValues;
    startUserRegistration({name, email, password});
  }

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
          initialValues={initialValues}
          validationSchema={registerValidationSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            handleFormSubmit(values);
            setTimeout(() => {
              // alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
              resetForm();
            }, 400);
          }}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form className="text-plt-dark mt-6 overflow-x-hidden pb-9 flex flex-col gap-2">
              <div className="h-20">
                <label htmlFor="name" className="block text-sm  text-gray-600">nombre</label>
                <Field type="name" name="name" className={`w-full mt-1 p-1 border-2 ${touched.name && errors.name ? 'border-red-500':'border-plt-cream'}`} />
                <ErrorMessage name="name" component="div" className="text-red-500 text-xs" />
              </div>

              <div className="h-20">
                <label htmlFor="email" className="block text-sm text-gray-600">correo</label>
                <Field type="email" name="email" className={`w-full mt-1 p-1 border-2 ${touched.email && errors.email ? 'border-red-500':'border-plt-cream'}`} />
                <ErrorMessage name="email" component="div" className="text-red-500 text-xs" />
              </div>

              <div className="h-20">
                <label htmlFor="password" className="block text-sm text-gray-600">contraseña</label>
                <Field type="password" name="password" className={`w-full mt-1 p-1 border-2 ${touched.password && errors.password ? 'border-red-500':'border-plt-cream'}`} />
                <ErrorMessage name="password" component="div" className="text-red-500 text-xs" />
              </div>

              <div className="h-20">
                <label htmlFor="confirmPassword" className="block text-sm text-gray-600">confirmar contraseña</label>
                <Field type="password" name="confirmPassword" className={`w-full mt-1 p-1 border-2 ${touched.confirmPassword && errors.confirmPassword ? 'border-red-500':'border-plt-cream'}`} />
                <ErrorMessage name="confirmPassword" component="div" className="text-red-500 text-xs" />
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
