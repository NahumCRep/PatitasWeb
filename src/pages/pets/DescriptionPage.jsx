import React from 'react'
import { useParams } from 'react-router-dom'
import { Layout } from '../../components/layouts'
// ** Icons
import { RiWhatsappFill } from 'react-icons/ri';
import { MdEmail } from 'react-icons/md';

import dog from '../../assets/images/dogcard.jpg';
import { pets } from '../../localData/testData';

export const DescriptionPage = () => {
    const { id } = useParams();
    console.log(pets[0].id)
    const data = pets.filter((pet) => pet.id == id)
    console.log(data);

    return (
        <Layout>
            <article className="font-secondary px-4 md:px-20">
                <div className="flex flex-col md:flex-row">
                    <figure className="w-full py-6 md:w-1/2">
                        <img src={dog} alt="perro" />
                    </figure>

                    <div className="w-full flex flex-col justify-between md:w-1/2 md:p-6">
                        <div>
                            <h1 className="text-3xl">Información</h1>
                            <div className="flex flex-col gap-4 mt-4 md:flex-row">
                                <div className="w-full md:w-[60%]">
                                    <h2 className="text-xl font-semibold text-plt-dark">Datos</h2>
                                    <div className="flex flex-col gap-2 mt-2">
                                        <p className="text-sm"><span className="text-slate-400">Nombre</span> {data[0].name}</p>
                                        <p className="text-sm"><span className="text-slate-400">Edad</span> {data[0].age}</p>
                                        <p className="text-sm"><span className="text-slate-400">Sexo</span> {data[0].genre}</p>
                                        <p className="text-sm"><span className="text-slate-400">Raza</span> {data[0].breed}</p>
                                        <p className="text-sm"><span className="text-slate-400">Ubicación</span> {data[0].location}</p>
                                    </div>
                                </div>
                                <div className="w-full md:w-[40%]">
                                    <h2 className="text-xl font-semibold text-plt-dark">Contacto</h2>
                                    <p className="text-sm flex gap-1 items-center mt-2">
                                        <RiWhatsappFill size={25} color='#25d366' />
                                        {data[0].contact?.whatsapp}
                                    </p>
                                    <p className="text-sm flex gap-1 items-center mt-2">
                                        <MdEmail size={25} color="#E74C3C" />
                                        {data[0].contact?.email}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="text-plt-dark mt-9 md:mt-0">
                            <h2 className="text-xl font-semibold text-plt-dark border-b-2 border-slate-300">Descripción adicional</h2>
                            <p className="text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempus tellus nec augue viverra, in ullamcorper dolor vulputate. Duis eleifend risus turpis, quis fringilla purus vehicula id. Vivamus vel mauris sed mauris gravida dignissim vitae in eros.</p>
                        </div>
                    </div>
                </div>

                <div>

                </div>
            </article>
        </Layout>
    )
}
