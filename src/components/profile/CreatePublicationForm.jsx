import React, { useState } from 'react';
import { Field, Form, Formik } from 'formik';
import { provinces } from '../../localData/provinces';

import { SubForm, PetProfilePhoto } from './form';
import { FaPlus } from 'react-icons/fa';


export const CreatePublicationForm = ({ handleSubmit }) => {
    const [isDog, setIsDog] = useState(true);
    // const [petImages, setPetImages] = useState([]);

    const handlePetState = () => { setIsDog(!isDog) }

    return (
        <Formik
            initialValues={{
                name: '',
                breed: '',
                ageNumber: 0,
                ageString: '',
                location: provinces[0].value,
                description: '',
                whatsapp: '',
                email: ''
            }}
            validate={values => {
                const errors = {};

                if (!values.name) {
                    errors.name = "ingrese el nombre de la mascota"
                }

                if (!values.ageString) {
                    errors.ageString = "seleccione un valor"
                }

                if (!values.email) {
                    errors.email = "ingrese un correo de contacto"
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
                <div>
                    <h2>Que tipo de mascota es?</h2>
                    <div className="flex mt-2">
                        <button onClick={handlePetState} className={`w-[7rem] py-1 ${isDog ? 'bg-plt-blue text-white' : 'grayButton'}`}>
                            Perro
                        </button>
                        <button onClick={handlePetState} className={`w-[7rem] py-1 ${!isDog ? 'bg-plt-cream' : 'grayButton'} `}>
                            Gato
                        </button>
                    </div>
                    <Form>
                        <div className='w-full flex flex-col gap-5 mt-5 md:flex-row'>

                            <PetProfilePhoto pet={isDog} />

                            <div className="w-full md:w-[60%] font-secondary">
                                <SubForm touched={touched} errors={errors} />   
                            </div>
                        </div>

                        <div className="mt-3">
                            <label htmlFor='description'>Descripcion</label>
                            <Field as="textarea" name="description" className="formFieldComponent h-28 resize-none" />
                        </div>

                        <div className="w-full mt-5">
                            <div className='flex items-center gap-2'>
                                Imagenes adicionales
                                <label htmlFor='extraImgs' className='text-slate-400 bg-slate-200 w-7 h-7 flex items-center justify-center cursor-pointer transition-colors duration-200 hover:bg-slate-300'>
                                    <FaPlus size={15} />
                                </label>
                                <input type="file" id="extraImgs" className='hidden' />
                            </div>
                            <hr className='mt-2' />
                            <div className='mt-3'>
                                <div className='w-40 h-40 bg-slate-400'></div>
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
                </div>
            )}
        </Formik>
    )
}
