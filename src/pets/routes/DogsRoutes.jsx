import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AvailableDogsPage } from '../pages/AvailableDogsPage';

export const DogsRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<AvailableDogsPage />} />
        <Route path='/page/:page' element={<AvailableDogsPage />} />
        <Route path='/:province' element={<AvailableDogsPage />} />
        <Route path='/:province/page/:page' element={<AvailableDogsPage />} />
    </Routes>
  )
}
