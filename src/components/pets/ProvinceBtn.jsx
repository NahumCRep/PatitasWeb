import React from 'react'
import { Link } from 'react-router-dom'

export const ProvinceBtn = ({province, basePath}) => {
    return (
        <li className="w-full h-10">
            <Link
                to={`/${basePath}/${province}`}
                className="flex items-center w-full h-full px-7 md:px-3 transition-colors  
                md:bg-white md:hover:bg-slate-200"
            >
                {province}
            </Link>
        </li>
    )
}
