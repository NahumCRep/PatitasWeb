import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
// ** Hooks
import { useAuthStore } from '../hooks';
// ** Pages
import { LoginPage, RegisterPage } from '../pages/auth';
import { AboutPage, HomePage, NotFoundPage } from '../pages/publicPages';
// ** Routes
import { ProfileRoutes } from './profile';
import { DogsRoutes, CatsRoutes } from './pets';


export const AppRoutes = () => {
    // const isLogged = 'authenticated'
    const { status, startCheckingToken } = useAuthStore();

    useEffect(() => {
        startCheckingToken();
    },[])

    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='perros/*' element={<DogsRoutes />} />
            <Route path='gatos/*' element={<CatsRoutes />} />
            <Route path='nosotros' element={<AboutPage />} />
            
            {
                status === 'authenticated'
                    ? (
                        <>
                            <Route path='perfil/*' element={<ProfileRoutes />} />
                            <Route path='login' element={<Navigate to='/perfil' />} />
                            <Route path='register' element={<Navigate to='/perfil' />} />
                        </>
                    )
                    : (
                        <>
                            <Route path='login' element={<LoginPage />} />
                            <Route path='register' element={<RegisterPage />} />
                            <Route path='perfil/*' element={<Navigate to='/login' />} />
                        </>
                    )
            }

            <Route path='*' element={<NotFoundPage />} />

        </Routes>
    )
}
