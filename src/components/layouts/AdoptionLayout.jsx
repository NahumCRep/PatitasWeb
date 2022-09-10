import React from 'react'
// ** Components
import { Layout } from './Layout'

export const AdoptionLayout = ({ option }) => {
  return (
    <Layout>
      <div className={`w-full h-14 ${option === 'dog' ? 'bg-plt-blue':'bg-plt-cream'}`}></div>
      <div className="w-full h-auto">

      </div>
    </Layout>
  )
}
