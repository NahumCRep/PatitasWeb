import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
// ** Pages
import { LoginPage, RegisterPage } from '../pages/auth';
import { AboutPage, HomePage, NotFoundPage } from '../pages/publicPages';
// ** Routes
import { ProfileRoutes } from './profile';
import { DogsRoutes, CatsRoutes } from './pets';


export const AppRoutes = () => {
    const isLogged = 'authenticated'
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='perros/*' element={<DogsRoutes />} />
            <Route path='gatos/*' element={<CatsRoutes />} />
            <Route path='about' element={<AboutPage />} />
            
            {
                isLogged === 'authenticated'
                    ? (
                        <>
                            <Route path='profile/*' element={<ProfileRoutes />} />
                            <Route path='login' element={<Navigate to='/profile' />} />
                            <Route path='register' element={<Navigate to='/profile' />} />
                        </>
                    )
                    : (
                        <>
                            <Route path='login' element={<LoginPage />} />
                            <Route path='register' element={<RegisterPage />} />
                            <Route path='profile/*' element={<Navigate to='/login' />} />
                        </>
                    )
            }

            <Route path='*' element={<NotFoundPage />} />

        </Routes>
    )
}
