import React from 'react'
import { AvailablePetsLayout } from '../../components/layouts'
import { useParams } from 'react-router-dom';
// ** Icons
import { FaCat } from 'react-icons/fa';

export const AvailableCatsPage = () => {
  const {province, page} = useParams();
  return (
    <AvailablePetsLayout pet={'cat'}>
      <div className="w-full h-16 px-5 flex items-center gap-4">
        <div className="w-11 aspect-square text-white flex items-center justify-center bg-plt-cream">
          <FaCat size={35} /> 
        </div>
        <p className="font-secondary font-semibold text-slate-400">gatos { province && `/  ${province.replaceAll('-', ' ')}`}</p>
      </div>
      <div className="grid-cols-2 md:grid-cols-4">
       
      </div>
    </AvailablePetsLayout>
  )
}
