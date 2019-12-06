import React from 'react';
import photos from '../../data/veggiesPhotos'
import ImageGallery from '../components/ImageGallery'

const VegGallery = () => {
  return (
    <>
      <ImageGallery photos={photos} title={'Fresh Vegetables'} />
    </>

  )
}

export default VegGallery;
