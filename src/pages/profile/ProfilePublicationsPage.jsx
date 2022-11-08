import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ProfileLayout } from '../../components/layouts';
// icons
import { BsFillPlusCircleFill } from 'react-icons/bs';

export const ProfilePublicationsPage = () => {
  const navigate = useNavigate();

  const redirectToCreatePublicationPage = () => {
    navigate('crear');
  }

  return (
    <ProfileLayout layoutTitle={'Publicaciones'}>
        <div className="w-full h-9 flex items-center">
          <h2 className="font-secondary">Mis Publicaciones</h2>
        </div>
        <div className="mt-3">
          <button
            onClick={() => redirectToCreatePublicationPage()} 
            className="flex items-center justify-center cursor-pointer md:w-52 md:h-52 bg-slate-100 text-slate-400 transition-colors duration-200  hover:text-plt-darkcream">
            <BsFillPlusCircleFill size={60} />
          </button>
        </div>
    </ProfileLayout>
  )
}
