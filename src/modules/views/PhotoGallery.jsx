import React from 'react';
import photos from '../../data/photos'
import ImageGallery from '../components/ImageGallery'

const PhotoGallery = () => {
  return (
    <>
      <ImageGallery photos={photos} title={'Grocery'} />
    </>

  )
}

export default PhotoGallery;
