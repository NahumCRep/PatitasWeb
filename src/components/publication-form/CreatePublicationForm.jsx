import { useState } from 'react';
import { Field, Form, Formik } from 'formik';

import { SubForm, PetProfilePhoto } from './';
import { FaPlus } from 'react-icons/fa';

import { usePetStore } from '../../hooks';
import { districts, provinces } from '../../utils';


export const CreatePublicationForm = ({ handleSubmit, onSetPetImage }) => {
    const [isDog, setIsDog] = useState(true);
    const {image, startClearPreviewImage, startUploadingPetImage} = usePetStore();
    // const [petImages, setPetImages] = useState([]);

    const handlePetState = () => { setIsDog(!isDog) }

    return (
        <Formik
            initialValues={{
                name: '',
                breed: '',
                genre: 'macho',
                ageNumber: 0,
                ageString: '',
                location: provinces[0],
                district: districts[provinces[0]],
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

                if (!values.whatsapp) {
                    errors.whatsapp = "ingrese un numero de contacto"
                }

                return errors;
            }}

            onSubmit={(values, { setSubmitting, resetForm }) => {
                setTimeout(() => {
                    // alert(JSON.stringify(values, null, 2));
                    startUploadingPetImage(image)
                    startClearPreviewImage();
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
                        <div className='w-full h-auto flex flex-col gap-5 mt-5 md:flex-row'>
                            <PetProfilePhoto isDog={isDog} />

                            <div className="w-full mt-2 md:w-[60%] md:mt-0 font-secondary">
                                <SubForm />   
                            </div>
                        </div>

                        <div className="mt-3">
                            <label htmlFor='description'>Descripcion</label>
                            <Field as="textarea" name="description" className="formField h-28 resize-none" />
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
