import React, { useState } from 'react'
import { Layout } from './Layout'
import { Link } from 'react-router-dom';
// ** Icons
import { TbArrowBarToDown, TbArrowBarToUp } from 'react-icons/tb';
// ** Local Data
import { provinces } from '../../localData/provinces'
import { ProvinceBtn } from '../availablePets/ProvinceBtn';

export const AvailablePetsLayout = ({ pet, children }) => {
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);

  const handleOptionsOpen = () => {
    setIsOptionsOpen(!isOptionsOpen);
  }

  return (
    <Layout>
      <div className={`w-full h-14 ${pet === 'dog' ? 'bg-plt-blue bg-blue-paws' : 'bg-plt-cream bg-cream-paws'} bg-repeat`}></div>

      <div className="w-full h-auto min-h-screen font-secondary flex relative md:px-20">
        <button 
          className="absolute top-0 right-4 h-16 aspect-square flex items-center justify-center md:hidden"
          onClick={handleOptionsOpen}
        >
          {
            isOptionsOpen
              ? <TbArrowBarToUp size={25} />
              : <TbArrowBarToDown size={25} />
          }
        </button>
        <div className={`absolute top-16 w-full overflow-hidden bg-plt-dark transition-height duration-700
                        ${isOptionsOpen ? 'h-screen' : 'h-0' } 
                        md:relative md:top-0 md:w-1/4 md:h-auto md:bg-white`}>
          <div className={`w-full px-7 h-16 flex items-center justify-between border-b-2 
                       ${pet === 'dog' ? 'border-plt-blue':'border-plt-cream'}  text-white 
                        md:px-3 md:text-plt-dark md:border-slate-200`}>
            Provincia
            <Link 
              to={`/${pet === 'dog' ? 'perros' : 'gatos'}`}
              className="p-1 text-sm bg-slate-200 text-slate-400 hover:text-slate-500"
            >
              Todas
            </Link>
          </div>
          <ul className="mt-2 py-3 text-plt-white md:py-0 md:text-plt-dark">
            {provinces.map(prov => (
              <ProvinceBtn
                key={prov.value}
                province={prov}
                basePath={pet === 'dog' ? 'perros' : 'gatos'}
              />
            ))}
          </ul>
        </div>

        <div className="flex-grow">
          {children}
        </div>
      </div>
    </Layout>
  )
}
