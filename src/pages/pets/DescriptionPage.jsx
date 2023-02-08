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
    }, [id])

    if (!activePublication._id) {
        return <PageLoader />
    }



    return (
        <Layout>
            <article className="min-h-screen mb-10 font-secondary px-4 
                md:px-20 bg-svg-bg-x bg-no-repeat bg-fill md:bg-contain">
                <section className='w-full h-96'>
                    <div className='w-[90%] md:w-1/2 h-96 mt-9 mx-auto relative photoholders bg-slate-200 shadow-cust'>
                        <figure className="w-full h-full rotate-2 border-[10px] border-white shadow-md">
                            <img
                                src={activePublication.image}
                                alt={`
                                    foto de un 
                                    ${activePublication.pet_type === 'dog' ? 'perro' : 'gato'}
                                    llamado ${activePublication.name}
                                `}
                                className="w-full h-full object-cover"
                            />
                        </figure>
                    </div>
                </section>
                <div className="w-full flex flex-col items-center mt-5">
                    <div className="w-[90%] bg-white shadow-md flex flex-col gap-10 
                        justify-between rounded-md mt-5 p-6 md:mt-0  md:w-2/3 lg:w-1/2 "
                    >
                        <div>
                            <h1 className="text-5xl font-semibold text-plt-dark">
                                {activePublication.name}
                            </h1>
                            <div className="flex flex-col gap-4 mt-4">
                                <ul className='flex flex-wrap items-center gap-3 text-plt-dark text-lg'>
                                    <li>{activePublication.genre}</li>
                                    <li className='w-[6px] h-[6px] bg-plt-cream rounded-full'></li>
                                    <li>{activePublication.age}</li>
                                    <li className='w-[6px] h-[6px] bg-plt-cream rounded-full'></li>
                                    <li>{activePublication.breed}</li>
                                </ul>
                                <p className='text-base text-plt-dark'>
                                    Se encuentra en
                                    <strong>
                                        {` ${activePublication.location.district},
                                        ${activePublication.location.province}`}
                                    </strong>
                                </p>
                            </div>
                        </div>

                        <div className="w-full">
                            <h2 className="text-xl text-slate-400">
                                Contacto
                            </h2>
                            <hr />
                            <p className="text-base flex gap-1 items-center mt-2 text-plt-dark">
                                <span><RiWhatsappFill size={25} color='#25d366' /></span>
                                {activePublication.contact?.whatsapp}
                            </p>
                            {
                                activePublication.contact.email &&
                                (
                                    <p className="text-base flex gap-1 text-plt-dark
                                                items-center mt-2">
                                        <span><MdEmail size={25} color="#E74C3C" /></span>
                                        {activePublication.contact?.email}
                                    </p>
                                )
                            }
                        </div>

                        <div className="text-plt-dark">
                            <h2 className="text-xl text-slate-400">
                                Descripción
                            </h2>
                            <hr />
                            <p className="text-base mt-2 text-plt-dark">
                                {activePublication.description}
                            </p>
                        </div>
                    </div>
                </div>

                {
                    activePublication.extra_images && activePublication.extra_images.length > 0 
                    ? (
                        <div className='mt-16'>
                            <h2 className="text-xl font-semibold text-plt-dark text-center">
                                Fotos Adicionales
                            </h2>
                            <hr />
                            <AdditionalImages images={activePublication.extra_images} />
                        </div>
                    )
                    : null
                }
            </article>
        </Layout>
    )
}
