import React, { lazy } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ReactMediumImg from 'react-medium-zoom';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    // backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));


const ImageGallery = ({ photos, title }) => {
  const classes = useStyles();
  return (
    <Container className={classes.cardGrid} fixed maxWidth="lg">
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            {title}
          </Typography>
          <Grid container spacing={4}>
            {
                photos.map((photo, i) => (
                <Grid key={i} item xs={12} sm={6} md={3}>
                  <Card key={i} className={classes.card}>
                    <ReactMediumImg key={i} style={{ width: '100%' }} src={photo.photo} />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                      {photo.caption}
                      </Typography>
                    </CardContent>
                  </Card>
              </Grid>
                ))
            }
          </Grid>
  </Container>

  )
}

export default ImageGallery;
