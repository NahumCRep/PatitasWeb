import React, { useEffect, useMemo } from 'react'
import { useParams } from 'react-router-dom';
// ** Icons
import { FaDog } from 'react-icons/fa';
// ** Components
import { PetsLayout } from '../../components/layouts';
import { Pagination, PetCard, PetGrid } from '../../components/pets';
import { pets } from '../../localData/testData';

export const DogsPage = () => {
  const {province, page} = useParams();

  // const showParams = useMemo(() => {
  //   console.log('llamada');
  // }, [params])

  useEffect(() => {
    console.log({province, page});
  }, [province, page])

  return (
    <PetsLayout pet={'dog'} baseLinkPath={'perros'} tlwColor={'plt-blue'}>
      
      <div className="w-full h-16 px-5 flex items-center gap-4">
        <div className="w-11 aspect-square text-white flex items-center justify-center bg-plt-blue">
          <FaDog size={35} /> 
        </div>
        <p className="font-secondary font-semibold text-slate-400">
          perros { province && `/  ${province.replaceAll('-', ' ')}`}
        </p>
      </div>

      <PetGrid>
        {pets.map((pet) => (
              <PetCard key={pet.id} pet={pet} />
        ))}
      </PetGrid>

      <Pagination />
      
    </PetsLayout>
  )
}
