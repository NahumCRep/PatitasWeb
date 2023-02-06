import { useEffect } from 'react'
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { usePublicationStore } from '../../hooks';
// ** Icons
import { FaDog } from 'react-icons/fa';
// ** Components
import { PetsLayout } from '../../components/layouts';
import { Pagination, PetCard, PetGrid } from '../../components/pets';

export const DogsPage = () => {
  const {province, page} = useParams()
  const { startGetPublications, publicationsData } = usePublicationStore()
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    startGetPublications({
      petType:'dog', 
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
    <PetsLayout pet={'dog'} baseLinkPath={'perros'} tlwColor={'plt-blue'}>
      
      <div className="w-full h-16 px-5 flex items-center gap-4">
        <div className="w-11 aspect-square text-white flex items-center justify-center bg-plt-blue">
          <FaDog size={35} /> 
        </div>
        <p className="font-secondary font-semibold text-slate-400">
          perros { province && `/  ${province.replaceAll('-', ' ')}`}
        </p>
      </div>

      <PetGrid>
        {
          publicationsData.docs && 
            publicationsData.docs.map((publication) => (
              <PetCard key={publication._id} pet={publication} />
            ))
        }
      </PetGrid>

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
