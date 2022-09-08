import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { LoginPage, RegisterPage } from '../auth/pages';
import { AboutPage, HomePage, NotFoundPage } from '../pages';
import { ProfileRoutes } from '../profile/routes';


export const AppRoutes = () => {
    const isLogged = 'not-authenticated'
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<AboutPage />} />
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
