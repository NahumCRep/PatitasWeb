import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePublicationStore, useAuthStore } from '../../hooks';

import { ProfileLayout } from '../../components/layouts';
import { PublicationCard } from '../../components/dashboard/publications';
// icons
import { FaPlus } from '../../utils/reactIcons'

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
        <div className="w-full h-9 mb-2 flex items-center justify-between">
          <h2 className="font-secondary">Mis Publicaciones</h2>
          <button
            onClick={() => redirectToCreatePublicationPage()} 
            className='flex items-center gap-1 rounded-md border-2
             border-slate-200 py-1 px-2 transition-colors duration-300
             hover:bg-slate-200 text-plt-dark'
          >
            <FaPlus />
            <p className='hidden md:block'>
              nueva publicacion
            </p>
          </button>
        </div>
        <hr />
        <div className="mt-3 grid grid-cols-2  md:grid-cols-100x300 lg:grid-cols-5 gap-2">
          {
            publications && publications.length > 0
            ? (publications.map((publication) => (
                <PublicationCard key={publication._id} publication={publication} />
              )))
            : <p className='text-slate-400'>No hay publicaciones</p>
          }
        </div>
    </ProfileLayout>
  )
}
