import React, { useState } from 'react'
import { IoIosArrowForward } from '../../../utils/reactIcons';

export const AdditionalSection = ({sectionTitle, children}) => {
    const [isSectionOpen, setIsSectionOpen] = useState(false)

    const handleOpenSection = () => {
        setIsSectionOpen(!isSectionOpen)
    }

    return (
        <section className='font-secondary'>
            <hr className='my-5' />
            <button 
                className='flex items-center gap-2 text-base md:text-lg font-semibold'
                onClick={handleOpenSection}
            >
                {sectionTitle}
                <IoIosArrowForward 
                    className={`${isSectionOpen ? 'rotate-90':''} transition-transform duration-500 text-slate-400`} 
                    size={20}
                />
            </button>
            <div className={`${isSectionOpen ? 'max-h-max' : 'h-0'} overflow-hidden transition-height duration-500 `}>
                {children}
            </div>
        </section>
    )
}
