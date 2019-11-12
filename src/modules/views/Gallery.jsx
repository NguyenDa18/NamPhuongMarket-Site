import React, { useState } from 'react';
import Button from '@material-ui/core/Button';

import { ReactBnbGallery } from 'react-bnb-gallery';
import photos from '../../data/photos';


const Gallery = () => {
  const [showGallery, setShowGallery] = useState(false);

  return (
    <>
      <Button onClick={(e) => setShowGallery(!showGallery)} variant="contained" color="secondary">Open photo gallery</Button>
      <ReactBnbGallery
        show={showGallery}
        backgroundColor="#2196F3"
        photos={photos}
        onClose={(e) => setShowGallery(!showGallery)}
        preloadSize={5}
      />
    </>

  );
};

export default Gallery;
