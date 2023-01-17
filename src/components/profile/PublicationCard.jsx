import React from 'react'

export const PublicationCard = ({publication}) => {
  return (
    <div>
        <figure>
            <img src={publication.image} alt={`foto de ${publication.name}`} />
        </figure>
    </div>
  )
}
