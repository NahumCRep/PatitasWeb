import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { SignIn, SignUp } from '../auth/pages';
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
                            <Route path='signin' element={<Navigate to='/profile' />} />
                            <Route path='signup' element={<Navigate to='/profile' />} />
                        </>
                    )
                    : (
                        <>
                            <Route path='signin' element={<SignIn />} />
                            <Route path='signup' element={<SignUp />} />
                            <Route path='profile/*' element={<Navigate to='/signin' />} />
                        </>
                    )
            }

            <Route path='*' element={<NotFoundPage />} />

        </Routes>
    )
}
