import { useState } from 'react';
import { Field, Form, Formik } from 'formik';
import * as Yup from "yup";

import { SubForm, PetProfilePhoto, ExtraImagesForm } from './';
// import { FaPlus } from 'react-icons/fa';

import { usePetStore } from '../../hooks';
import { districts, provinces } from '../../utils/location';


export const CreatePublicationForm = ({ handleSubmit }) => {
    const [isDog, setIsDog] = useState(true);
    const { image, startClearPreviewImage, startPreviewImgFile, startUploadingPetImage } = usePetStore();
    
    const handlePetState = () => { setIsDog(!isDog) }

    const handleBeforeSubmit = (formData) => {
        // adding extra data
        formData.pet_type = isDog ? 'dog' : 'cat'
        formData.image = image;
        formData.is_adopted = false;
        formData.publication_date = new Date();
        formData.extra_images = [];
        formData.publication_user = '123456789'

        console.log('data before',formData)
    }

   
    const validationFormSchema = Yup.object().shape({
        name: Yup.string().required('el nombre es requerido'),
        ageString: Yup.string().required('seleccione un valor'),
        contact: Yup.object().shape({
            whatsapp: Yup.string().matches(/[0-9]/, 'ingrese solamente numeros').required('ingrese un numero de contacto')
        })
    })

    const initialValues = {
        name: '',
        breed: '',
        genre: 'macho',
        age: '',
        ageNumber: 0,
        ageString: '',
        location: {
            province: provinces[0],
            district: districts[provinces[0]][0]
        },
        description: '',
        contact: {
            whatsapp: '',
            email: ''
        }
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationFormSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
                setTimeout(() => {
                    // alert(JSON.stringify(values, null, 2));
                    // startUploadingPetImage(image)
                    startClearPreviewImage();
                    handleBeforeSubmit(values);
                    setSubmitting(false);
                    resetForm();
                }, 400);
            }}
        >
            {({ isSubmitting }) => (
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
                    <Form className='h-auto'>
                        
                        <div className='w-full flex flex-col gap-5 mt-5 md:flex-row'>
                            <PetProfilePhoto isDog={isDog} />
                            <SubForm />
                        </div>

                        <div className="mt-3">
                            <label htmlFor='description'>Descripcion</label>
                            <Field as="textarea" name="description" className="formField h-28 resize-none" />
                        </div>

                        <ExtraImagesForm />

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
