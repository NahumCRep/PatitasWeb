import React from 'react'
import { Link } from 'react-router-dom';

export const SideNavLink = ({url, children}) => {
  return (
    <Link to={url} className="w-full h-14 rounded-xl flex flex-nowrap items-center gap-2 px-2 font-secondary font-medium 
        text-white text-xl whitespace-nowrap transition-colors duration-500 hover:bg-plt-darkblue
        md:h-10 md:text-sm">
        {children}
    </Link>
  )
}
