import React from 'react'
import { Link } from 'react-router-dom';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';

export const AuthLayout = ({ tlwBgColor, children }) => {
    return (
        <div className=" w-[100vw] max-w-full min-h-[90vh] h-auto flex flex-col md:flex-row">
            <div className={`w-full h-16 ${tlwBgColor} md:w-1/2 md:min-h-[100vh] md:h-auto`}></div>

            <div className='w-full h-auto flex flex-col items-center justify-center gap-10 overflow-x-hidden md:w-1/2'>
                <div className=" w-full flex justify-start mt-8 px-4 md:px-20">
                    <Link 
                        to="/" 
                        className="flex items-center gap-2 font-secondary font-semibold text-gray-400 text-lg transition-colors duration-300 hover:text-plt-blue"
                    >
                        <HiOutlineArrowNarrowLeft />
                        inicio
                    </Link>
                </div>
                
                {children}
            </div>
        </div>
    )
}
