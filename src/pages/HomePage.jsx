import React from 'react';
// ** Components
import { Link } from 'react-router-dom';
import { Layout } from '../components/layouts';
import { Counter } from '../components/home/Counter';
import { PawsContainer } from '../components/home/PawsContainer';
// ** Images
import dog from '../assets/images/dog-head.png';
import map from '../assets/images/panama.svg';


export const HomePage = () => {
  return (
    <Layout>
      <header className="relative w-full h-[80vh] bg-plt-cream flex flex-col items-center justify-between overflow-hidden md:h-[calc(100vh-80px)]">
        <div className="flex flex-col items-center gap-5 z-20 md:gap-7 md:mt-4">
          <h1 className="w-full font-primary text-plt-dark text-6xl flex flex-col items-center mt-8 md:text-8xl md:gap-5 md:flex-row">
            <span>Perros</span>
            <span>y</span>
            <span>Gatos</span>
          </h1>

          <div className="flex flex-col items-center gap-5 lg:flex-row">
            <span className="font-secondary text-plt-dark font-semibold text-2xl">
              en busca de un
            </span>
            <span className="font-primary text-plt-blue text-5xl relative
                before:content-[''] before:absolute before:right-0 before:-top-4 before:w-24 before:h-24 before:rounded-full before:bg-white before:z-[-1]"
            >
              Hogar
            </span>
          </div>
        </div>

        <div className="
            relative w-[90%] h-2/6 flex justify-center items-end z-10 
            before:content-[''] before:absolute before:top-0 before:w-full before:aspect-square before:rounded-full before:bg-white
            md:w-[85%] md:h-1/2"
        >
          <img src={dog} alt="dog" className="w-11/12 z-10 md:w-1/2" />
        </div>

        <div className="absolute -left-1/3 top-20 w-56 aspect-square rounded-full outline outline-50 outline-offset-30 outline-plt-darkcream bg-plt-darkcream z-[0] md:w-1/3 md:-left-[20%]"></div>
        <div className="absolute -right-1/3 top-2/3 w-56 aspect-square rounded-full bg-plt-darkcream z-[0] md:w-1/3 md:-right-[20%] md:top-1/4"></div>
      </header>

      <div>
        <div className="w-full h-14 bg-plt-blue"></div>
        <div className="w-4/5 h-auto p-6 bg-plt-white shadow-2xl m-auto -translate-y-8 rounded-xl flex flex-col justify-center items-center gap-8
              md:flex-row md:w-[60%] md:p-16 lg:w-1/2"
        >
          <Counter type={'available'} amount={30} />
          <Counter type={'adopted'} amount={10} />
        </div>
      </div>

      <section className="w-full h-auto mt-16 px-4 flex flex-col gap-6 md:px-20 lg:flex-row">
        <div className="
              w-full flex flex-col justify-center gap-4 relative 
              before:content-[''] before:absolute before:z-0 before:w-64 before:aspect-square before:rounded-full before:border-[10px] before:border-dashed before:border-plt-cream before:opacity-30
              lg:w-1/2 md:before:opacity-50"
        >
          <h2 className="font-primary text-plt-darkcream text-4xl md:text-6xl drop-shadow-sm">
            Adopta !!
          </h2>
          <p className="z-10 font-secondary text-plt-dark text-base md:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque maximus
            mattis. Lorem ipsum dolor sit amet, consect adipiscing elit mattis.
          </p>
          <p className="z-10 font-primary text-plt-blue text-xl md:text-2xl">Estas interesado en adoptar ?</p>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center">
          <img src={map} alt="panama map" />
        </div>
      </section>


      <section className="w-full h-auto mt-16 flex flex-col lg:flex-row">
        <PawsContainer paw={'dog'} btnText="Perros" url={'/perros'} />
        <PawsContainer paw={'cat'} btnText="Gatos" url={'/gatos'} />
      </section>

      <section className="w-full min-h-[550px] h-auto relative mt-16 px-4 overflow-hidden md:px-20">
        <div className="w-full h-fit mt-[10%] flex flex-col justify-between items-start gap-4 z-10 md:w-2/3">
          <h2 className="font-primary text-plt-darkcream text-4xl z-10 md:text-6xl drop-shadow-sm">Publica !!</h2>
          <p className="z-10 font-secondary text-plt-dark text-base md:text-xl">
            Si tienes un perro o un gato que necesita un hogar, este es un sitio donde lo puedes dar a conocer creando una publicación.
          </p>
          <p className="z-10 font-secondary text-plt-dark text-base md:text-xl">
            Quieres hacerlo ? entonces...
          </p>
          <p className="z-10 font-primary text-plt-blue text-xl gap-2 md:text-2xl">
            Dale al botón y creemosla !!
          </p>
          <Link to={'/profile'} className="box-border py-4 px-12 z-10 rounded-xl font-primary font-semibold tracking-wider bg-plt-blue text-plt-white border-b-8 border-plt-darkblue transition-all duration-200 hover:border-b-2 hover:translate-y-1">
            Crear Publicación
          </Link>
        </div>
        <div className="absolute -right-44 top-20 w-56 aspect-square rounded-full outline outline-50 outline-offset-30 outline-plt-darkcream bg-plt-darkcream opacity-60 z-0 md:opacity-100 md:w-1/4 md:-right-[10%]"></div>
        <div className="absolute right-1/3 top-[40%] w-56 aspect-square rounded-full border-8 border-dashed border-plt-darkcream border-opacity-50 z-0 md:w-[20%] md:bottom-1/4 md:right-[20%]"></div>
      </section>
    </Layout>
  )
}
