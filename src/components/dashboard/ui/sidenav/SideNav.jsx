import React from 'react';
// ** Hooks
import { useAuthStore } from '../../../../hooks';
// ** Components
import { SideNavLink } from './SideNavLink';
import { Logo } from '../../../ui';
// ** Icons
import {
    MdOutlineDashboard,
    MdLogout,
    BsFillFilePostFill,
    BsFillGearFill,
    AiFillHome
} from '../../../../utils/reactIcons';

export const SideNav = ({ navOpen }) => {
    const { user, startLogout } = useAuthStore();

    const handleLogout = () => {
        startLogout();
    }

    return (
        <div className={`
            h-screen overflow-hidden fixed top-0 left-0 z-10 bg-plt-dark transition-width duration-700 
            ${navOpen ? 'w-[70vw] px-2' : 'w-0'} flex flex-col justify-between pb-4
            md:px-2 md:w-[18%]`}>
            <div>
                <div className="w-full h-32 flex flex-col items-center justify-center">
                    <div className="bg-white rounded-full">
                        <div className="w-16">
                            <Logo borderColor='#FFFFFF' insideColor='#185ADB' />
                        </div>
                    </div>
                </div>

                <div className="w-full h-12 bg-plt-lighterDark rounded-xl flex justify-center items-center">
                    <p className="text-white font-secondary font-semibold whitespace-nowrap">
                        {user.name}
                    </p>
                </div>

                <ul className="mt-4 px-2">
                    <SideNavLink url={'/'}>
                        <AiFillHome size={20} color="#FFC947" />
                        Patitas
                    </SideNavLink>
                    <SideNavLink url={'/perfil'}>
                        <MdOutlineDashboard size={20} color="#FFC947" />
                        Panel
                    </SideNavLink>
                    <SideNavLink url={'/perfil/publicaciones'}>
                        <BsFillFilePostFill size={20} color="#FFC947" />
                        Publicaciones
                    </SideNavLink>
                    <SideNavLink url={'/perfil/configuracion'}>
                        <BsFillGearFill size={20} color="#FFC947" />
                        Configuracion
                    </SideNavLink>
                </ul>
            </div>

            <button className="w-full h-14 rounded-xl flex flex-nowrap items-center gap-2 px-2 font-secondary font-medium
             text-white text-base whitespace-nowrap  transition-colors duration-500 hover:bg-plt-darkblue
             md:h-10 md:text-sm"
                onClick={() => handleLogout()}
            >
                <MdLogout size={20} color="#FFC947" />
                Cerrar Sesion
            </button>
        </div>
    )
}
