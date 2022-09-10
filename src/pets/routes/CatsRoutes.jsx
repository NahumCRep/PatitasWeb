import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AvailableCatsPage } from '../pages/AvailableCatsPage';

export const CatsRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<AvailableCatsPage />} />
        <Route path='/page/:id' element={<AvailableCatsPage />} />
        <Route path='/:province' element={<AvailableCatsPage />} />
        <Route path='/:province/page/:id' element={<AvailableCatsPage />} />
    </Routes>
  )
}
