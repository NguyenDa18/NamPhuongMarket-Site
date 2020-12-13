import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

import Gallery from 'react-grid-gallery'

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: '100%'
  },

  media: {
    width: '100%'
  },

  cardContent: {
    flexGrow: 1
  }
}))

const ImageGallery = ({ photos, title }) => {
  const classes = useStyles()
  return (
    <Container className={classes.cardGrid} fixed maxWidth='md'>
      <Typography component='h1' variant='h2' align='center' color='textPrimary' gutterBottom>
        {title}
      </Typography>
      <div style={{ margin: 'auto', padding: '10px' }}>
        <Gallery
          images={photos}
          enableImageSelection={false}
          backdropClosesModal
        />
      </div>
    </Container>
  )
}

export default ImageGallery
