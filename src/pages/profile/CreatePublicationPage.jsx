import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuthStore, usePublicationStore } from '../../hooks';
import { ProfileLayout } from '../../components/layouts';
import { ExtraImagesForm, PetProfilePhoto, SubForm } from '../../components/publication-form';
// import { districts, provinces } from '../../utils/location';
import { Field, Form, Formik, FormikProvider } from 'formik';
import * as Yup from "yup";
import { initialValues } from '../../utils/formikValues';
import { DeletePublicationForm, ChangeAdoption, AdditionalSection } from '../../components/dashboard/publication';

export const CreatePublicationPage = () => {
    const [isDog, setIsDog] = useState(true);
    const [formInitialValues, setFormInitialValues] = useState(initialValues)
    const { user } = useAuthStore()
    const { activePublication, startGetPublicationById, startCreatePublication,
        startClearActivePublication
    } = usePublicationStore();

    const params = useParams();

    useEffect(() => {
        startClearActivePublication();
        if (params.id) {
            startGetPublicationById(params.id);
        }
    }, [params])

    useEffect(() => {
        const publicationValues = {
            name: activePublication?.name,
            breed: activePublication?.breed,
            genre: activePublication?.genre,
            age: '',
            ageNumber: activePublication?.ageNumber,
            ageString: activePublication?.ageString,
            location: {
                province: activePublication?.location.province,
                district: activePublication?.location.district
            },
            description: activePublication?.description,
            contact: {
                whatsapp: activePublication?.contact.whatsapp,
                email: activePublication?.contact.email
            },
            is_adopted: activePublication?.is_adopted
        }

        if (activePublication._id) {
            setFormInitialValues(publicationValues)
            setIsDog(activePublication.pet_type === 'dog')
        } else {
            setFormInitialValues(initialValues)
        }
    }, [activePublication])

    if (params.id && !activePublication._id) return <h1>Cargando...</h1>

    const handlePetState = () => { setIsDog(!isDog) }

    const handleBeforeSubmit = (formData) => {
        // adding extra data
        formData.pet_type = isDog ? 'dog' : 'cat'
        formData.image = activePublication.image;
        formData.extra_images = activePublication.extra_images;
        formData.publication_date = new Date();
        formData.publication_user = user.uid;

        if (activePublication._id) {
            formData._id = activePublication._id;
        }

        startCreatePublication(formData);
    }

    const validationFormSchema = Yup.object().shape({
        name: Yup.string().required('el nombre es requerido'),
        ageString: Yup.string().required('seleccione un valor'),
        contact: Yup.object().shape({
            whatsapp: Yup.string().matches(/[0-9]/, 'ingrese solamente numeros').required('ingrese un numero de contacto')
        })
    })




    return (
        <ProfileLayout layoutTitle={"Publicación"}>
            <Formik
                enableReinitialize={true}
                initialValues={formInitialValues}
                validationSchema={validationFormSchema}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    handleBeforeSubmit(values);
                    setTimeout(() => {
                        startClearActivePublication();
                        setSubmitting(false);
                        resetForm();
                    }, 400);
                }}
            >
                {({ isSubmitting }) => (
                    <div className='h-auto pb-2'>
                        <h2>Que tipo de mascota es?</h2>
                        <div className="flex mt-2">
                            <button onClick={handlePetState} className={`w-[7rem] py-1 ${isDog ? 'bg-plt-blue text-white' : 'grayButton'}`}>
                                Perro
                            </button>
                            <button onClick={handlePetState} className={`w-[7rem] py-1 ${!isDog ? 'bg-plt-cream' : 'grayButton'} `}>
                                Gato
                            </button>
                        </div>
                        <Form className='h-full'>

                            <div className='w-full flex flex-col gap-5 mt-5 md:flex-row'>
                                <PetProfilePhoto isDog={isDog} />
                                <SubForm />
                            </div>

                            <div className="mt-3">
                                <label htmlFor='description'>Descripcion</label>
                                <Field as="textarea" name="description" className="formField h-28 resize-none" />
                            </div>

                            <ExtraImagesForm />

                            <hr className='mt-7' />
                            {
                                activePublication._id && (
                                    <ChangeAdoption />
                                )
                            }

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full md:w-40 h-11 text-sm my-4 rounded-lg float-right bg-plt-cream text-plt-dark transition-colors duration-500 hover:bg-plt-darkcream"
                            >
                                {
                                    activePublication._id
                                        ? 'Guardar Cambios'
                                        : 'Aceptar'
                                }
                            </button>
                        </Form>
                    </div>
                )}
            </Formik>

            {
                activePublication._id &&
                (
                    <>
                        <hr className='mt-24' />
                        <AdditionalSection sectionTitle={'Quiere Eliminar la Publicacion ?'}>
                            <DeletePublicationForm publicationId={params.id} />
                        </AdditionalSection>
                    </>
                )

            }
        </ProfileLayout>
    )
}
