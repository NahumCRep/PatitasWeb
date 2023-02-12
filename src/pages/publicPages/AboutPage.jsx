import React from 'react'
import { Layout } from '../../components/layouts/Layout'

export const AboutPage = () => {
  return (
    <Layout >
      <section className="w-full min-h-screen relative
        before:content-[''] before:absolute before:z-0 before:top-0 before:left-0 before:opacity-50 
        before:w-full before:h-full before:bg-svg-bg before:bg-no-repeat
        flex justify-center
      ">
        <div className='my-10 text-plt-dark font-secondary w-5/6 md:w-2/3 p-10
         bg-white shadow-xl flex flex-col gap-8'>
          <div className='z-20'>
            <h1 className='text-4xl font-semibold'>Que es Patitas ?</h1>
            <p className='mt-4'>
              Pastitas es un sitio para que cualquier persona pueda encontrar o publicar 
              perros o gatos &#128049;&#128054; que esten en adopción. Sabemos que uno de los medios para este fin
              son las redes sociales que se limita a la red de amigos y la visibilidad que le puedan
              dar ellos. Patitas no trata de reemplazar ese medio, sino a dar un lugar extra dedicado  
              unicamente a la adopción. <br /> <br />
              Aqui podras ver perros y gatos en adopción en todo Panamá o crear una cuenta 
              y hacer la publicación para encontrarle un hogar a esas patitas &#128151; !! 
            </p>
          </div>

          <div className='z-20'>
            <h2 className='text-xl font-semibold'>Solamente es para Panamá ?</h2>
            <p className='mt-4'>
              Sí, las publicaciones son unicamente para usuarios que se encuentran 
              en Panamá.
            </p>
          </div>

          <div className='z-20'>
            <h2 className='text-xl font-semibold'>Contacto</h2>
            <p className='mt-4'>patitaswebinfo@gmail.com</p>
          </div>
        </div>
      </section>
    </Layout>
  )
}
