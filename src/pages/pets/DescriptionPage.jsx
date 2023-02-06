import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { usePublicationStore } from '../../hooks'
import { Layout } from '../../components/layouts'
import { PageLoader } from '../../components/ui'
import { AdditionalImages, PetInfoField } from '../../components/pets'
// ** Icons
import { RiWhatsappFill, MdEmail } from '../../utils/reactIcons';

export const DescriptionPage = () => {
    const { id } = useParams();
    const { startGetPublicationById, activePublication } = usePublicationStore();
    
    useEffect(() => {
        startGetPublicationById(id)
    },[id])

    if(!activePublication._id){
        return <PageLoader />
    }



    return (
        <Layout>
            <article className="min-h-screen font-secondary px-4 md:px-20">
                <div className="flex flex-col md:flex-row">
                    <figure className="w-full py-6 md:w-1/2">
                        <img 
                            src={activePublication.image} 
                            alt={`
                                foto de un 
                                ${activePublication.pet_type === 'dog' ? 'perro' : 'gato'}
                                llamado ${activePublication.name}
                            `}
                            className="rounded-lg" 
                        />
                    </figure>

                    <div className="w-full flex flex-col justify-between md:w-1/2 md:p-6">
                        <div>
                            <h1 className="text-3xl">Información</h1>
                            <hr />
                            <div className="flex flex-col gap-4 mt-4 lg:flex-row">
                                <div className="w-full lg:w-[50%]">
                                    <h2 className="text-xl font-semibold text-plt-dark">Datos</h2>
                                    <div className="flex flex-col gap-2 mt-2">
                                        <PetInfoField
                                            field={'Nombre'}
                                            value={activePublication.name}
                                        />
                                        <PetInfoField
                                            field={'Edad'}
                                            value={activePublication.age}
                                        />
                                        <PetInfoField
                                            field={'Sexo'}
                                            value={activePublication.genre}
                                        />
                                        <PetInfoField
                                            field={'Raza'}
                                            value={activePublication.breed}
                                        />
                                        <PetInfoField
                                            field={'Ubicación'}
                                            value={`
                                                ${activePublication.location.district},
                                                ${activePublication.location.province}
                                            `}
                                        />
                                    </div>
                                </div>
                                <div className="w-full lg:w-[50%]">
                                    <h2 className="text-xl font-semibold text-plt-dark">Contacto</h2>
                                    <p className="text-lg md:text-sm flex gap-1 items-center mt-2">
                                        <RiWhatsappFill size={25} color='#25d366' />
                                        {activePublication.contact?.whatsapp}
                                    </p>
                                    {
                                        activePublication.contact.email &&
                                        (
                                            <p className="text-lg md:text-sm flex gap-1 
                                                items-center mt-2">
                                                <MdEmail size={25} color="#E74C3C" />
                                                {activePublication.contact?.email}
                                            </p>
                                        )
                                    }
                                </div>
                            </div>
                        </div>

                        <div className="text-plt-dark mt-9 md:mt-0">
                            <h2 className="text-xl font-semibold text-plt-dark">
                                Descripción adicional
                            </h2>
                            <hr />
                            <p className="text-lg md:text-sm mt-2">{activePublication.description}</p>
                        </div>
                    </div>
                </div>

                {
                    activePublication.extra_images && (
                        <div className='mt-8'>
                            <h2 className="text-xl font-semibold text-plt-dark">
                                Imagenes
                            </h2>
                            <hr />
                            <AdditionalImages images={activePublication.extra_images} />
                        </div>
                    )
                }
            </article>
        </Layout>
    )
}
