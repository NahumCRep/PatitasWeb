import React from 'react'
import { Layout } from '../components/Layout'
import bluePaws from '../assets/icons/paws-blue.svg';
import dog from '../assets/images/dog-head.png'
import { Counter } from '../components/Counter';

export const HomePage = () => {
  return (
    <Layout>
      <header className="relative w-full h-[80vh] bg-plt-cream flex flex-col items-center justify-between overflow-hidden md:h-[calc(100vh-80px)]">
        <div className="flex flex-col items-center gap-5 z-20 md:gap-7">
          <h1 className="
              w-full font-primary text-plt-dark text-6xl flex flex-col items-center mt-8
              md:text-8xl md:gap-5 md:flex-row"
          >
            <span>Perros</span>
            <span>y</span>
            <span>Gatos</span>
          </h1>

          <div className="flex flex-col items-center gap-5 lg:flex-row">
            <span className="font-secondary text-plt-dark font-semibold text-2xl">en busca de un</span>
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

      <div className="bg-white">
        <div className="w-full h-14 bg-plt-blue"></div>
        <div className="w-4/5 h-auto p-6 bg-plt-white shadow-2xl m-auto -translate-y-8 rounded-xl flex flex-col justify-center items-center gap-8
              md:flex-row md:w-[60%] md:p-16 lg:w-1/2"
        >
          <Counter type={'available'} amount={30} />
          <Counter type={'adopted'} amount={10} />
        </div>
      </div>
      {/* <div 
        className={`w-full h-96 bg-blue-paws bg-repeat-space bg-slate-400`}>

      </div> */}
    </Layout>
  )
}
