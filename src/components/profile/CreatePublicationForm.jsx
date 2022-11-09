import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import { provinces } from '../../localData/provinces';

import { SubForm } from './form';
import { DefaultImage } from './DefaultImage';



export const CreatePublicationForm = ({ handleSubmit }) => {
    const [pet, setPet] = useState("dog");
    // const [petImages, setPetImages] = useState([]);

    const handlePetState = () => {
        pet === 'dog'
            ? setPet('cat')
            : setPet('dog')
    }

    return (
        <Formik
            enableReinitializea
            initialValues={{
                name: '',
                breed: '',
                ageNumber: 0,
                ageString: '',
                location: provinces[0].value,
                description: '',
                contact: {
                    whatsapp: '',
                    email: ''
                }
            }}
            validate={values => {
                const errors = {};

                if (!values.name) {
                    errors.name = "ingrese el nombre de la mascota"
                }

                if (!values.ageString) {
                    errors.ageString = "seleccione un valor"
                }

                if (!values.contact.email) {
                    errors.contact.email = "ingrese un correo de contacto"
                }
                return errors;
            }}

            onSubmit={(values, { setSubmitting, resetForm }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                    resetForm();
                }, 400);
            }}
        >
            {({ errors, touched, isSubmitting }) => (
                <Form className="">
                    <div className='w-full flex gap-5 mt-5'>
                        <div className='w-full h-96 md:w-[40%]'>
                            <figure className='w-full h-[80%]'>
                                <DefaultImage pet={pet} />
                            </figure>
                            <label
                                htmlFor='petImg'
                                className="w-full h-12 mt-5 flex items-center justify-center font-secondary
                                      text-white bg-plt-blue rounded-xl cursor-pointer
                                        transition-colors duration-200 hover:bg-plt-darkblue"
                            >
                                subir imagen
                            </label>
                            <input id='petImg' type="file" className='hidden' />
                        </div>

                        <div className="w-full md:w-[60%] font-secondary">
                            <h2>Que tipo de mascota es?</h2>
                            
                            <div className="flex mt-2">
                                <button 
                                    onClick={handlePetState} 
                                    className={`w-[7rem] py-1 ${pet === 'dog' ? 'bg-plt-blue text-white' : 'bg-slate-200 text-slate-400 hover:bg-slate-300'} `}
                                >
                                    Perro
                                </button>
                                <button 
                                    onClick={handlePetState} 
                                    className={`w-[7rem] py-1 ${pet === 'cat' ? 'bg-plt-cream' : 'bg-slate-200 text-slate-400 hover:bg-slate-300'} `}
                                >
                                    Gato
                                </button>
                            </div>
                            <div className="grid grid-cols-2 gap-5 mt-5">
                                <SubForm />
                            </div>
                        </div>
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
    )
}
