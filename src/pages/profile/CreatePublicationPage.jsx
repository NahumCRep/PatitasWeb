import React, { useState } from 'react';

import { ProfileLayout } from '../../components/layouts';
import { DefaultImage, CreatePublicationForm } from '../../components/profile';

export const CreatePublicationPage = () => {
    const [petImage, setPetImage] = useState('')

    return (
        <ProfileLayout layoutTitle={"Publicación"}>   
            <CreatePublicationForm handleSubmit={() => {}} onSetPetImage={setPetImage} />
        </ProfileLayout>
    )
}
