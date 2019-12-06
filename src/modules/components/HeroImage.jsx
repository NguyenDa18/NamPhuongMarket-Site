import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link'

const useStyles = makeStyles((theme) => ({
  heroButtons: {
    padding: theme.spacing(2, 0, 0),
  },
  photoButton: {
    backgroundColor: '#ffc107'
  },
  fbButton: {
    color: '#0d47a1'
  },
  yelpButton: {
    backgroundColor: '#e62958'
  }
 }));

const HeroImage = () => {
  const classes = useStyles();
  return (
    <>
      <header className="App-header" />
      <Container maxWidth="md">
           <div className={classes.heroButtons}>
            <Grid container spacing={3} justify="center">
              <Grid item>
                <Button variant="contained" className={classes.photoButton}>
                <a style={{ textDecoration: 'none', color: 'black' }} href="tel:+15032843549">Call Us Now</a>
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" className={classes.fbButton}>
                  <Link style={{ textDecoration: 'none' }} href="https://www.facebook.com/namphuongmkt/">Like Us On Facebook</Link>
                </Button>
              </Grid>
              <Grid item>
                <Button variant="contained" className={classes.yelpButton}>
                  <Link style={{ textDecoration: 'none', color: 'white' }} href="https://www.yelp.com/biz/nam-phuong-market-portland">Review Us On Yelp</Link>
                </Button>
              </Grid>
            </Grid>
          </div>
      </Container>
    </>

  );
};

export default HeroImage;
