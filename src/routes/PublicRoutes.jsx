import React from 'react'
import { Route } from 'react-router-dom';
import { HomePage } from '../pages';

export const PublicRoutes = () => {
  return (
    <>
        <Route path='/' element={<HomePage />} />
       
    </>
  )
}
