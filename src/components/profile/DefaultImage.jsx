import React from 'react';
import dogImage from '../../assets/images/dogDefaultImg.jpg';
import catImage from '../../assets/images/catDefaultImg.jpg';

export const DefaultImage = ({ pet }) => {
    return (
        <img 
            src={pet === 'dog' ? dogImage : catImage} 
            className="w-full h-full object-cover"
            alt={`${pet} default image`} 
        />
    )
}
