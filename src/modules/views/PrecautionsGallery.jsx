import React from 'react'
import photos from '../../data/precautions.json'
import ImageGallery from '../components/ImageGallery'

const PrecautionsGallery = () => {
  return (
    <>
      <ImageGallery photos={photos} title='Health & Safety Measures' />
    </>
  )
}

export default PrecautionsGallery
