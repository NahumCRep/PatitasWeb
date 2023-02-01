import { Form, Formik, Field, ErrorMessage } from 'formik'
import * as Yup from "yup";
import { TiWarning } from '../../../utils/reactIcons'
import React from 'react'

export const DeletePublicationForm = ({ publicationId }) => {

    const validationSchema = Yup.object().shape({
        publication: Yup.string().required('ingrese la ID de la publicacion')
                    .oneOf([publicationId ,null], 'La ID no coincide')
    })
    return (
        <section className='mt-2'>
            <Formik
                initialValues={{ publication: '' }}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    console.log(values)
                }}
            >
                {({ isSubmitting }) => (
                    <Form className='mt-2 p-2 font-secondary border-2 border-dashed border-red-300'>
                        <p className='text-sm mt-2'> 
                            <TiWarning size={20} className='text-red-500' />
                            Ingrese el ID
                            <span className='font-bold text-red-500'> {publicationId} </span>
                            para eliminarlo. 
                        </p>
                        <div className='mt-2 flex flex-col md:flex-row items-start w-full'>
                            <div className='w-full md:w-1/3'>
                                <Field type="text" name="publication" className='formField w-full' />
                                <ErrorMessage name="publication" component="div" className='text-xs text-red-400' />
                            </div>
                            <button type='submit' className='bg-white border-2 border-red-500 h-9 w-full md:w-fit md:px-3 rounded-md 
                                mt-3 md:mt-1 md:ml-2 text-red-500 hover:bg-red-500 hover:text-white transition-colors duration-300'>
                                Eliminar
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </section>
    )
}
