import React, { useEffect } from 'react'
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { usePublicationStore } from '../../hooks'; 
// ** Icons
import { FaCat } from 'react-icons/fa';
// ** Components
import { PetsLayout } from '../../components/layouts';
import { Pagination, PetCard, PetGrid } from '../../components/pets';
import { Loader } from '../../components/ui';

export const CatsPage = () => {
  const {province, page} = useParams();
  const { startGetPublications, publicationsData } = usePublicationStore();
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    startGetPublications({
      petType:'cat', 
      province, 
      page
    })
  }, [province, page])

  const changePage = (pageNumber) => {
    const path = location.pathname
    let goToPage = `${path}/page/${pageNumber}`
    
    if(path.includes('/page/')){
      goToPage = path.replace(/(\/page\/\d)/, `/page/${pageNumber}`)
    }

    navigate(goToPage)
  }

  const nextPage = (currentPageNumber) => {
    changePage(currentPageNumber + 1)
  }

  const prevPage = (currentPageNumber) => {
    changePage(currentPageNumber - 1)
  }


  return (
    <PetsLayout pet={'cat'} baseLinkPath={'gatos'} tlwColor={'plt-cream'}>
      <div className="w-full h-16 px-5 flex items-center gap-4">
        <div className="w-11 aspect-square text-white flex items-center justify-center bg-plt-cream">
          <FaCat size={35} /> 
        </div>
        <p className="font-secondary font-semibold text-slate-400">
          gatos { province && `/  ${province.replaceAll('-', ' ')}`}
        </p>
      </div>

      <section className='min-h-screen'>
        <PetGrid> 
          {
            publicationsData.docs
            ? (publicationsData.docs.length > 0 
                ? (publicationsData.docs.map((publication) => (
                <PetCard key={publication._id} pet={publication} />
                )))
                : <p className='w-full col-span-full text-slate-300 text-center'>No hay publicaciones</p>
              )
            : <div className='col-span-full flex justify-center'><Loader /></div>
          }
        </PetGrid>
      </section>
      
      {
        publicationsData.page &&
          <Pagination 
            totalPages  = {publicationsData.totalPages} 
            currentPage = {publicationsData.page}
            limit       = {publicationsData.limit}
            changePage  = {changePage}
            nextPage    = {nextPage}
            prevPage    = {prevPage} 
          />
      }

    </PetsLayout>
  )
}
