import React from 'react';
import dogImage from '../../assets/images/dogDefaultImg.jpg';
import catImage from '../../assets/images/catDefaultImg.jpg';

export const DefaultImage = ({ isDog }) => {
    return (
        <img 
            src={isDog ? dogImage : catImage} 
            className="w-full h-full object-cover"
            alt={`imagen por defecto`} 
        />
    )
}
