import React from 'react'
import photos from '../../data/groceryPhotos.json'
import ImageGallery from '../components/ImageGallery'

const GroceryGallery = () => {
  return (
    <>
      <ImageGallery photos={photos} title='Grocery' />
    </>

  )
}

export default GroceryGallery
