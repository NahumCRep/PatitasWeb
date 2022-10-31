import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { NotFoundPage } from '../../pages/publicPages';
import { ProfilePage, ProfilePublicationsPage } from '../../pages/profile';

export const ProfileRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<ProfilePage />} />
            <Route path='publicaciones' element={<ProfilePublicationsPage />} />
            <Route path='informacion' element={<ProfilePage />}/>
            <Route path='*' element={<NotFoundPage />} />
        </Routes>
    )
}
