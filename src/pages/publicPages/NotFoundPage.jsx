import React from 'react'
import { Layout } from '../../components/layouts'

export const NotFoundPage = () => {
  return (
    <Layout>
      <div className='w-full min-h-screen flex flex-col justify-center items-center'>
        <h1 className='text-6xl font-primary text-plt-blue'>Error 404</h1>
        <h2 className='text-2xl font-secondary font-bold text-plt-lighterDark'>NOT FOUND</h2>
      </div>
    </Layout>
  )
}
