import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePublicationStore, useAuthStore } from '../../hooks';

import { ProfileLayout } from '../../components/layouts';
import { PublicationCard } from '../../components/profile';
// icons
import { BsFillPlusCircleFill } from 'react-icons/bs';

export const ProfilePublicationsPage = () => {
  const navigate = useNavigate();
  const { user } = useAuthStore();
  const { startGetPublicationsByUser, publications } = usePublicationStore();

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
        <div className="mt-3 grid grid-cols-2  md:grid-cols-100x300 lg:grid-cols-5 gap-2">
          <button
            onClick={() => redirectToCreatePublicationPage()} 
            className="flex items-center justify-center cursor-pointer 
            bg-slate-100 text-slate-400 transition-colors 
            duration-200  hover:text-plt-darkcream">
            <BsFillPlusCircleFill size={40} />
          </button>
          {
            publications 
            && (
              publications.map((publication) => (
                <PublicationCard key={publication._id} publication={publication} />
              ))
            )
          }
        </div>
    </ProfileLayout>
  )
}
