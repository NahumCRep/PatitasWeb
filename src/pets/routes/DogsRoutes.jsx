import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { DogsPage, DescriptionPage } from '../pages';

export const DogsRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<DogsPage />} />
        <Route path='/page/:page' element={<DogsPage />} />
        <Route path='/:province' element={<DogsPage />} />
        <Route path='/:province/page/:page' element={<DogsPage />} />
        <Route path='/description/:id' element={<DescriptionPage />} />
    </Routes>
  )
}
