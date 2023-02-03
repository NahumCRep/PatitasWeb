import React from 'react'
import { Logo } from './Logo'

export const PageLoader = () => {
  return (
    <section className='w-[100vw] h-[100vh] flex items-center justify-center bg-white'>
        <div className='flex items-center flex-col'>
            <div className='w-32 h-32 animate-pulse'>
                <Logo />
            </div>
            <h1 className='font-primary text-plt-lighterDark'>Cargando...</h1>
        </div>
    </section>
  )
}
