import React from 'react'
import { Link } from 'react-router-dom';

export const SideNavLink = ({ url, children }) => {
  return (
    <li>
      <Link to={url} className="w-full min-w-max h-14 px-2 rounded-xl flex flex-nowrap items-center gap-2 font-secondary font-medium 
        text-white text-base whitespace-nowrap transition-colors duration-500 md:hover:bg-plt-darkblue
        md:h-10 md:text-sm">
        {children}
      </Link>
    </li>
  )
}
