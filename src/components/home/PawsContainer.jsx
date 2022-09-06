import React from 'react';

// ** Images
import dog from '../../assets/images/dog.png';
import cat from '../../assets/images/cat.png';
import { Link } from 'react-router-dom';

export const PawsContainer = ({ paw, btnText, url}) => {
    return (
        <div className={`
            w-full h-64 flex items-end
            ${paw === 'dog' ? 'bg-blue-paws bg-plt-blue' : 'bg-cream-paws bg-plt-cream flex-row-reverse'} 
            bg-repeat-space md:h-[27rem]
        `}>
            <div className={`
                w-1/2 h-2/3 md:h-1/2 px-4 flex flex-col gap-2 justify-between pb-6 md:pb-12 items-start
                ${paw === 'dog' ? 'items-end' : ''}
            `}>
                <p className="font-secondary font-semibold text-plt-dark text-2xl md:text-4xl">
                    Ver
                </p>
                <Link 
                    to={url} 
                    className={`
                        py-4 px-12 rounded-xl font-primary font-semibold tracking-wider border-b-8 transition-all duration-200 hover:border-b-2
                        ${paw === 'dog' ? 'bg-plt-cream text-plt-dark border-plt-darkercream':'bg-plt-blue border-plt-darkblue text-plt-white'} 
                    `}
                >
                    {btnText}
                </Link>
                <p className="font-secondary font-semibold text-plt-dark text-2xl md:text-4xl">
                    Disponibles
                </p>
            </div>
            <div className="w-1/2 h-full flex items-end justify-end">
                {
                    paw === 'dog'
                        ? <img src={dog} alt="perrito" className="h-[90%]" />
                        : <img src={cat} alt="gatito" className="h-[90%]" />
                }
            </div>
        </div>
    )
}
