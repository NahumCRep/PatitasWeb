import React from 'react'
import { NavLink } from 'react-router-dom'


export const NavSubLi = ({title, url}) => {
  return (
    <li className="h-12 w-full' md:flex md:items-center md:p-2">
        <NavLink 
          to={url}
          className="flex items-center w-full h-full ml-10 pl-2 text-sm border-l-2 border-plt-cream 
          md:pl-0 md:ml-0 md:justify-center md:border-none md:hover:bg-plt-cream"
        >
          {title}
        </NavLink>
    </li>
  )
}
