import React, { useState } from 'react'
import { useAuthStore } from '../../hooks'
import { NavSubLi } from './NavSubLi'
import { BsThreeDotsVertical, FaUserCircle } from '../../utils/reactIcons'

export const ProfileBox = () => {
    const { user, startLogout } = useAuthStore()
    const [openProfileBox, setOpenProfileBox] = useState(false)


    const handleOpenProfileBox = () => {
        setOpenProfileBox(!openProfileBox)
    }


    return (
        <li className="w-full h-auto md:w-fit md:h-[80px] md:relative">
            <div
                className="text-base flex items-center gap-4 w-full h-16 px-6 outline-none border-none 
                          md:h-[80px] md:w-fit "
            >
                <span className='flex gap-1 items-center'>
                    <FaUserCircle /> {user.name}
                </span>
                <button onClick={handleOpenProfileBox} className='w-6 h-6 flex items-center justify-center md:hover:text-plt-blue' >
                    <BsThreeDotsVertical />
                </button>
            </div>

            <ul className={`w-full transition-height duration-700 ${openProfileBox ? 'h-24' : 'h-0'} overflow-hidden 
                        md:absolute md:top-[70px] md:bg-white md:text-plt-dark md:shadow-2xl md:scale-100`}
            >
                <NavSubLi title={'Mi Perfil'} url={'/perfil'} sublink />
                <li className='h-12 w-full md:flex md:items-center md:p-2'>
                    <button className='flex items-center w-full h-full ml-10 pl-2 text-sm border-l-2 border-plt-cream 
                            md:pl-0 md:ml-0 md:justify-center md:border-none md:hover:bg-plt-cream'
                        onClick={() => startLogout()}>
                        cerrar sesion
                    </button>
                </li>
            </ul>
        </li>
    )
}
