import React, { useState, useEffect } from 'react';
// ** Hooks
import { Link, useLocation } from 'react-router-dom';
// ** Components
import { Layout } from './Layout'
import { ProvinceBtn } from '../pets/ProvinceBtn';
// ** Icons
import { FaSearchPlus, FaSearchMinus } from 'react-icons/fa';
// ** Local Data
import { provinces } from '../../localData/provinces'

export const PetsLayout = ({ pet, baseLinkPath, tlwColor, children }) => {
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const { pathname } = useLocation();
  
  const handleOptionsOpen = () => {
    setIsOptionsOpen(!isOptionsOpen);
  }

  useEffect(() => {
    setIsOptionsOpen(false);
  }, [pathname])

  return (
    <Layout>
      <div className={`w-full h-14 bg-${tlwColor} ${pet === 'dog' ? 'bg-blue-paws' : 'bg-cream-paws'} bg-repeat`}></div>

      <div className="w-full h-auto min-h-screen font-secondary flex relative md:px-20">
        <button
          className="absolute top-0 right-4 h-16 aspect-square text-slate-400 flex items-center justify-center md:hidden"
          onClick={handleOptionsOpen}
        >
          {
            isOptionsOpen
              ? <FaSearchMinus size={35} />
              : <FaSearchPlus size={35} />
          }
        </button>
        <div className={`absolute top-16 w-full overflow-hidden z-20 bg-plt-dark transition-height duration-700
                        ${isOptionsOpen ? 'h-screen' : 'h-0'} 
                        md:relative md:top-0 md:w-[30%] md:h-auto md:bg-white`}
        >
          <div className={`w-full pl-7 pr-4 h-16 flex items-center justify-between border-b-2 border-b-${tlwColor} text-white
                        md:px-3 md:text-plt-dark md:border-slate-200`}
          >
            Provincia
            <Link
              to={`/${baseLinkPath}`}
              className="inline-block p-3 text-sm bg-slate-200 text-slate-400 hover:text-slate-500 hover:bg-slate-300 md:p-1"
            >
              Todas
            </Link>
          </div>
          <ul className="mt-2 py-3 text-plt-white md:py-0 md:text-plt-dark">
            {provinces.map(prov => (
              <ProvinceBtn
                key={prov.value}
                province={prov}
                basePath={baseLinkPath}
              />
            ))}
          </ul>
        </div>

        <div className="flex-grow h-auto pb-2">
          {children}
        </div>
      </div>
    </Layout>
  )
}
