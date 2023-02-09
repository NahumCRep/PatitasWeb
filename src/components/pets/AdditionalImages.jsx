import React, { useState } from 'react'
import { ModalSlider } from './ModalSlider'

export const AdditionalImages = ({ images }) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedIndexImage, setSelectedIndexImage] = useState(0)

    const handleModal = () => {
        setIsModalOpen(!isModalOpen)
    }

    const handleImage = (imgIndex) => {
        setSelectedIndexImage(imgIndex)
        setIsModalOpen(true)
    }

    const handleSlider = (action, currentImageIndex) => {
        // action -> prev or next
        const range = images.length - 1
        switch(action){
            case 'prev':
                const prevIdx = currentImageIndex - 1 
                if(prevIdx >= 0){
                    setSelectedIndexImage(prevIdx)
                }else if(prevIdx < 0){
                    setSelectedIndexImage(range)
                }
                break
            case 'next':
                const nextIdx = currentImageIndex + 1
                if(nextIdx <= range){
                    setSelectedIndexImage(nextIdx)
                }else if(nextIdx > range){
                    setSelectedIndexImage(0)
                }
                break
            default:
                break
        }
    }

    return (
        <section className='my-4 w-full grid grid-cols-2  md:grid-cols-100x300 lg:grid-cols-5 gap-3'>
            {
                images &&
                images.map((image, index) => (
                    <figure 
                        key={image}
                        className='border-[10px] border-white shadow-cust cursor-pointer
                        md:hover:scale-110 md:hover:rotate-3'
                    >
                        <img
                            src={image}
                            alt={`imagen adicional ${index} de la mascota`}
                            className='aspect-square object-cover '
                            onClick={() => handleImage(index)}
                        />
                    </figure>
                ))
            }

            <ModalSlider
                imageSelected={selectedIndexImage}
                imageList={images}
                isOpen={isModalOpen}
                closeModal={handleModal}
                handleSlider={handleSlider}
            />
        </section>
    )
}
