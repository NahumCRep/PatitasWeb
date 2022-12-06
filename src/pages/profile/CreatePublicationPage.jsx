import React from 'react';
import { ProfileLayout } from '../../components/layouts';
import { CreatePublicationForm } from '../../components/publication-form';

export const CreatePublicationPage = () => {
    return (
        <ProfileLayout layoutTitle={"Publicación"}>   
            <CreatePublicationForm handleSubmit={() => {}} />
        </ProfileLayout>
    )
}
