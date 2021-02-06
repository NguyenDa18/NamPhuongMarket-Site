import React from 'react'
import nonfoodsPhotos from '../../data/nonfoodsPhotos.json'
import ImageGallery from '../components/ImageGallery'

const NonFoodsGallery = () => {
    return (
        <div>
            <ImageGallery photos={nonfoodsPhotos} title='Kitchen Supplies' />
        </div>
    )
}

export default NonFoodsGallery