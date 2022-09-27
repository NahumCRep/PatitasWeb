import React, { useState } from 'react';
// ** Icons
import { AiOutlineMenuUnfold, AiOutlineMenuFold } from 'react-icons/ai';
import { HiOutlineMenuAlt3, HiOutlineX } from 'react-icons/hi';
// ** Images
import { SideNav } from '../profile';

export const ProfileLayout = ({ children }) => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  const handleNavOpen = () => {
    setIsSideNavOpen(!isSideNavOpen);
  }
  return (
    <div className="flex">
      <button
        className="fixed right-8 top-11 text-white bg-plt-blue rounded-full p-1 md:hidden"
        onClick={handleNavOpen}
      >
        {
          isSideNavOpen
            ? <HiOutlineX size={35} />
            : <HiOutlineMenuAlt3 size={35} />
        }
        
      </button>


      <SideNav navOpen={isSideNavOpen} handleNav={handleNavOpen} />

      <div className="flex-grow h-auto min-h-screen md:ml-[18%] ">
        <div className="w-full h-32 p-4 bg-svg-bg-hd bg-no-repeat bg-cover">
          <div className="w-full h-full p-4 font-secondary flex items-center justify-between">
            <h1 className="text-3xl font-semibold md:text-6xl">Mi Panel</h1>
            <button className=" hidden text-white bg-plt-blue p-2 rounded-xl border-b-8 border-plt-darkblue
                transition-all duration-150 hover:border-b-2 hover:translate-y-1 md:inline">
              cerrar sesion
            </button>

          </div>
        </div>
        <div className="h-[700px]">
          {children}
        </div>
      </div>
    </div>
  )
}
