import React from 'react'
import { Layout } from './Layout'

// ** Icons
import { FaDog, FaCat } from 'react-icons/fa';

export const AvailablePetsLayout = ({pet, children}) => {
  return (
    <Layout>
      <div className={`w-full h-14 ${pet === 'perros' ? 'bg-plt-blue bg-blue-paws':'bg-plt-cream bg-cream-paws'} bg-repeat`}></div>
      <div className="w-full h-auto px-4 md:px-20 font-secondary">
        <div className="md:w-1/4 h-[400px]">
            <div className="w-full px-3 py-5 shadow-lg">Provincia</div>
        </div>
        <div></div> 
      </div>
    </Layout>
  )
}
