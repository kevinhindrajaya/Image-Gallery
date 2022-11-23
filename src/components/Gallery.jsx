import React, { useState } from 'react'
import Java from '../assets/javascript.png'
import './gallery.css'

const Gallery = ({galleryImages}) => {
    const [slideNumber, setSlideNumbr] = useState(0);
    const [openModal, setOpenModal] = useState(false);

  return (
    <div className='w-full h-screen bg-[#0a192f]'>
        <div  className='galleryWrap'>
            {
                galleryImages && galleryImages.map((slide, index) => {
                    return(
                        <div className='single' key={index}>
                            <img src={slide.img} alt="" />
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Gallery