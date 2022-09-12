import React from 'react'
import { useParams } from 'react-router-dom';
// ** Icons
import { FaCat } from 'react-icons/fa';
// ** Components
import { PetsLayout } from '../../components/layouts'
import { pets } from '../../localData/testData';
import { PetCard } from '../../components/pets/PetCard';

export const CatsPage = () => {
  const {province, page} = useParams();
  return (
    <PetsLayout pet={'cat'} baseLinkPath={'gatos'} tlwColor={'plt-cream'}>
      <div className="w-full h-16 px-5 flex items-center gap-4">
        <div className="w-11 aspect-square text-white flex items-center justify-center bg-plt-cream">
          <FaCat size={35} /> 
        </div>
        <p className="font-secondary font-semibold text-slate-400">gatos { province && `/  ${province.replaceAll('-', ' ')}`}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4">
      {
          pets.map((pet) => {
            return(
              <PetCard key={pet.id} pet={pet} />
            )
          })
        }
      </div>
    </PetsLayout>
  )
}
