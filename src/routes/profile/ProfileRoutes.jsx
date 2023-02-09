import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { NotFoundPage } from '../../pages/publicPages';
import { ProfilePage, ProfilePublicationsPage, CreatePublicationPage, ConfigPage } from '../../pages/profile';

export const ProfileRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<ProfilePage />} />
            <Route path='publicaciones' element={<ProfilePublicationsPage />} />
            <Route path='publicaciones/crear' element={<CreatePublicationPage />} />
            <Route path='publicaciones/:id' element={<CreatePublicationPage />}/>
            <Route path='configuracion' element={<ConfigPage />}/>
            <Route path='*' element={<NotFoundPage />} />
        </Routes>
    )
}
