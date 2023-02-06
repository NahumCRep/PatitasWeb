import React from 'react'
import { usePagination } from '../../hooks'
import { IoIosArrowBack, IoIosArrowForward } from '../../utils/reactIcons'

export const Pagination = ({
  totalPages, currentPage, limit,
  nextPage, prevPage, changePage
}) => {
  const { pagination } = usePagination({ totalPages, currentPage, limit })

  return (
    <div className="w-full h-14 flex items-center justify-center">
      <div className='flex items-center gap-2'>
        <button 
          onClick={() => prevPage(currentPage)}
          disabled={currentPage <= 1}
          className={
            `bg-slate-100 h-8 py-1 px-2 rounded-md 
              ${currentPage <= 1 ? 'text-slate-400' : 'text-plt-lighterDark'}
            `}
        >
          <IoIosArrowBack size={20} />
        </button>

        <ul className='flex gap-1 items-center'>
          {
            pagination.map((page, index) => {
              if (page === '...') {
                return <li key={`dots${index}`}>{page}</li>
              }

              return (
                <li key={page} >
                  <button 
                    onClick={() => changePage(page)}
                    disabled={currentPage === page}
                    className={`
                      h-8 py-1 px-2 rounded-md
                      ${currentPage === page 
                          ? 'bg-plt-blue text-white' 
                          : 'bg-slate-200 text-plt-lighterDark'}
                    `}
                  >
                    {page}
                  </button>
                </li>
              )
            })
          }
        </ul>

        <button 
          onClick={() => nextPage(currentPage)}
          disabled={currentPage >= totalPages}
          className={
            `bg-slate-100 h-8 py-1 px-2 rounded-md 
              ${currentPage >= totalPages ? 'text-slate-400' : 'text-plt-lighterDark'}
            `}
        >
          <IoIosArrowForward size={20} />
        </button>
      </div>
    </div>
  )
}
