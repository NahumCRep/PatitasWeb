import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import * as Yup from "yup";
import { Field, Form, Formik } from 'formik';
import { useAuthStore, usePublicationStore } from '../../hooks';
import { ProfileLayout } from '../../components/layouts';
import { initialValues } from '../../utils/formikValues';
import { PageLoader, Loader } from '../../components/ui';
import { ExtraImagesForm, PetProfilePhoto, SubForm } from '../../components/publication-form';
import { DeletePublicationForm, ChangeAdoption, AdditionalSection } from '../../components/dashboard/publication';

export const CreatePublicationPage = () => {
    const { user } = useAuthStore();
    const [isDog, setIsDog] = useState(true);
    const [formInitialValues, setFormInitialValues] = useState(initialValues);
    const { activePublication, startGetPublicationById, startCreatePublication,
        startClearActivePublication
    } = usePublicationStore();
    
    const navigate = useNavigate();
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

    // Loader
    if (params.id && !activePublication._id){
        return <PageLoader />
    }  
        

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

        const resp = startCreatePublication(formData);
        resp.then(res => {
            let alertType = res.ok ? 'success' : 'error'
            Swal.fire(
                'Publicacion!',
                `${res.message}`,
                `${alertType}`
            ).then(function() {
                startClearActivePublication();
                navigate('/perfil/publicaciones');
            });
        })
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
                                className="w-full md:w-40 h-11 flex justify-center items-center 
                                    text-sm my-4 rounded-lg float-right bg-slate-200 text-plt-dark 
                                    transition-colors duration-500 hover:bg-slate-300"
                            >
                                {
                                    isSubmitting 
                                    ? <Loader />
                                    : (
                                        activePublication._id
                                            ? 'Guardar Cambios'
                                            : 'Aceptar'
                                    )
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
