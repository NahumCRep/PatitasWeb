import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavLi = ({title, url}) => {
  return (
    <li className={`h-16 w-full md:w-fit md:flex md:items-center`}>
        <NavLink 
            to={url}
            className="flex items-center w-full h-full px-10 md:px-5 md:h-fit md:ml-0 md:justify-center md:hover:text-plt-blue"
        >
            {title}
        </NavLink>
    </li>
  )
}
