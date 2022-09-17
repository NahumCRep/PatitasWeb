import React from 'react';
import { TbArrowLeftBar } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import { Logo } from '../ui';

export const SideNav = ({navOpen, handleNav}) => {
    return (
        <div className={`
            min-h-screen h-auto overflow-hidden fixed top-0 left-0 z-10 bg-plt-blue transition-width duration-700 
            ${navOpen ? 'w-[70vw]':'w-0'} 
            md:static md:p-2 md:w-1/5`}>
            <div className="w-full h-24 flex flex-col items-center justify-center border-b-2 border-slate-300">
                <div className="font-primary flex items-center gap-2">
                    <div className="w-12">
                        <Logo borderColor='#FFFFFF' insideColor='#0A1931' />
                    </div>
                    Patitas
                </div>
                <Link to={'/'} className=" flex items-center text-white">
                    <TbArrowLeftBar size={20} />
                    inicio
                </Link>
            </div>
        </div>
    )
}
