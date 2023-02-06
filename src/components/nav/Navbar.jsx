import { useEffect, useState } from 'react';
import { useAuthStore } from '../../hooks';
// **Components
import { NavLink } from 'react-router-dom';
import { NavLi } from './NavLi';
import { NavSubLi } from './NavSubLi';
import { ProfileBox } from './ProfileBox';
// **Logo
import logo from '../../assets/icons/logo.svg';
// **Icons
import { HiOutlineMenuAlt3, HiOutlineX } from 'react-icons/hi';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';


export const Navbar = () => {
  const { status } = useAuthStore();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isAdoptOpen, setIsAdoptOpen] = useState(false);

  const handleNav = () => {
    setIsNavOpen(!isNavOpen);
  }

  const handleAdoptionMenu = () => {
    setIsAdoptOpen(!isAdoptOpen);
  }

  return (
    <nav className='w-full h-[80px] shadow-xl flex items-center px-4 fixed z-50 bg-white md:px-20 md:h-[60px] md:justify-between'>
      {/* Logo */}
      <NavLink
        to={'/'}
        className="flex items-center font-primary text-xl text-plt-cream"
      >
        <img src={logo} className="w-11" alt='logo del sitio web patitas' />
        Patitas
      </NavLink>

      {/* Links */}
      <div 
        className={`
        absolute right-0 top-[80px] z-50 h-[100vh] bg-plt-dark
        transition-width duration-1000  ${isNavOpen ? 'w-[60vw]' : 'w-0'} overflow-hidden 
        md:relative md:w-auto md:h-[70px] md:top-0 md:bg-transparent md:overflow-visible
        `}
      >
        <ul  className="w-full h-full mt-8 font-secondary text-lg text-plt-white md:flex md:items-center md:mt-0 md:text-plt-dark">
          <NavLi title={'Inicio'} url={"/"} />
          <li className="w-full h-auto md:w-fit md:h-[80px] md:relative">
              <button 
                className="text-base  flex items-center gap-5 w-full h-16 px-6 outline-none border-none 
                          md:h-[80px] md:gap-3 md:w-fit md:hover:text-plt-blue"
                onClick={handleAdoptionMenu}
              >
                Adopcion
                {isAdoptOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </button>

              <ul className={`w-full transition-height duration-700 ${isAdoptOpen ? 'h-24':'h-0'} overflow-hidden 
                              md:absolute md:top-[70px] md:bg-white md:text-plt-dark md:shadow-2xl md:scale-100`}>
                  <NavSubLi title={'Perros disponibles'} url={'/perros'} sublink />
                  <NavSubLi title={'Gatos disponibles'} url={'/gatos'} sublink />
              </ul>
          </li>

          <NavLi title={'Nosotros'} url={"/nosotros"} />

          {
            status === 'authenticated'
              ? <ProfileBox />
              : <NavLi title={'Login'} url={"/login"} />
          }
        </ul>
      </div>

      {/* Burguer Button */}
      <button 
        className='absolute right-4 text-4xl md:hidden'
        onClick={handleNav}
      >
        {isNavOpen 
          ? <HiOutlineX className="text-plt-cream" />
          : <HiOutlineMenuAlt3 className="text-plt-cream" />
        }
      </button>
    </nav>
  )
}
