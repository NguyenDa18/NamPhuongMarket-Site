import React from 'react';
import photos from '../../data/meatPhotos.json'
import ImageGallery from '../components/ImageGallery'


const FridgeProductsGallery = () => {
  return (
    <>
      <ImageGallery photos={photos} title={'Fridge Products'} />
    </>
  )
}

export default FridgeProductsGallery;
