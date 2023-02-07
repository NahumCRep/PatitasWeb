import React, { useEffect } from 'react'
import { useAuthStore, usePublicationStore } from '../../hooks'
import { ProfileLayout } from '../../components/layouts'
import { PetGrid, PetCard } from '../../components/pets'
import { AiFillHeart } from '../../utils/reactIcons'

export const ProfilePage = () => {
  const { user } = useAuthStore()
  const { publicationsData, startGetPublicationsLikedByUser } = usePublicationStore()

  useEffect(()=>{
    startGetPublicationsLikedByUser(user.uid)
  },[user, publicationsData])

  return (
    <ProfileLayout layoutTitle={'Panel'}>
      <h1 className='px-5 font-secondary flex items-center gap-1'>
        Mis Favoritos
        <span className='text-red-500'><AiFillHeart /></span>
      </h1>
      <hr />
      <PetGrid>
        {
          publicationsData.docs && publicationsData.docs.length > 0
          ? (
            publicationsData.docs.map(publication => (
              <PetCard key={publication._id} pet={publication} />
            ))
          )
          : <p>no hay publicacions con like</p>
        }
      </PetGrid>
    </ProfileLayout>
  )
}
