import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { NotFoundPage } from '../../pages';
import { ProfilePage } from '../pages';

export const ProfileRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<ProfilePage />} />
            <Route path='*' element={<NotFoundPage />} />
        </Routes>
    )
}
