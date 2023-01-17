import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePetStore, useAuthStore } from '../../hooks';

import { ProfileLayout } from '../../components/layouts';
import { PublicationCard } from '../../components/profile';
// icons
import { BsFillPlusCircleFill } from 'react-icons/bs';

export const ProfilePublicationsPage = () => {
  const navigate = useNavigate();
  const { user } = useAuthStore();
  const { startGetPublicationsByUser } = usePetStore();

  const redirectToCreatePublicationPage = () => {
    navigate('crear');
  }

  useEffect(() => {
    startGetPublicationsByUser(user.uid);
  },[])

  return (
    <ProfileLayout layoutTitle={'Publicaciones'}>
        <div className="w-full h-9 flex items-center">
          <h2 className="font-secondary">Mis Publicaciones</h2>
        </div>
        <div className="mt-3">
          <button
            onClick={() => redirectToCreatePublicationPage()} 
            className="flex items-center justify-center cursor-pointer 
            md:w-40 md:h-40 bg-slate-100 text-slate-400 transition-colors 
            duration-200  hover:text-plt-darkcream">
            <BsFillPlusCircleFill size={40} />
          </button>
          {
            
          }
        </div>
    </ProfileLayout>
  )
}
