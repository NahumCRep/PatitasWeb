import React from 'react'
import { ProfileLayout } from '../../components/layouts'
// icons
import { BsFillPlusCircleFill } from 'react-icons/bs';

export const ProfilePublicationsPage = () => {
  return (
    <ProfileLayout>
        <div className="w-full h-9 flex items-center">
          <h2 className="font-secondary">Mis Publicaciones</h2>
        </div>
        <div className="mt-3">
          <div className="flex items-center justify-center cursor-pointer md:w-52 md:h-52 bg-slate-100 text-slate-400 transition-colors duration-200  hover:text-plt-darkcream">
            <BsFillPlusCircleFill size={60} />
          </div>
        </div>
    </ProfileLayout>
  )
}
