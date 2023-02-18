import React from 'react';
import dogImage from '../../../assets/images/dogDefaultImg.jpg';
import catImage from '../../../assets/images/catDefaultImg.jpg';

export const DefaultImage = ({ isDog }) => {
    return (
        <img 
            src={isDog ? dogImage : catImage} 
            className="w-full h-full bg-[#EFEFEF] object-contain"
            alt={`imagen por defecto`} 
        />
    )
}
