import React, { useState } from 'react';
// ** Icons
import { HiOutlineMenuAlt3, HiOutlineX } from 'react-icons/hi';
// ** Images
import { SideNav } from '../profile';

export const ProfileLayout = ({ children, layoutTitle }) => {
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
            <h1 className="text-3xl font-semibold md:text-6xl">
              {layoutTitle}
            </h1>
          </div>
        </div>
        <div className="h-auto p-4 md:p-9">
          {children}
        </div>
      </div>
    </div>
  )
}
