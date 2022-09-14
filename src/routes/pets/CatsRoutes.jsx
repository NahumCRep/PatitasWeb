import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { CatsPage, DescriptionPage } from '../../pages/pets';

export const CatsRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<CatsPage />} />
        <Route path='/page/:page' element={<CatsPage />} />
        <Route path='/:province' element={<CatsPage />} />
        <Route path='/:province/page/:page' element={<CatsPage />} />
        <Route path='/informacion/:id' element={<DescriptionPage />} />
    </Routes>
  )
}
