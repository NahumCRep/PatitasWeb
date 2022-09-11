import React, { useEffect, useMemo } from 'react'
import { AvailablePetsLayout } from '../../components/layouts'
import { useParams } from 'react-router-dom';
// ** Icons
import { FaDog } from 'react-icons/fa';

export const AvailableDogsPage = () => {
  const {province, page} = useParams();

  // const showParams = useMemo(() => {
  //   console.log('llamada');
  // }, [params])

  useEffect(() => {
    console.log({province, page});
  }, [province, page])

  return (
    <AvailablePetsLayout pet={'dog'}>
      <div className="w-full h-16 px-5 flex items-center gap-4">
        <div className="w-11 aspect-square text-white flex items-center justify-center bg-plt-blue">
          <FaDog size={35} /> 
        </div>
        <p className="font-secondary font-semibold text-slate-400">perros { province && `/  ${province.replaceAll('-', ' ')}`}</p>
      </div>
      <div className="grid-cols-2 md:grid-cols-4">
       
      </div>
    </AvailablePetsLayout>
  )
}
