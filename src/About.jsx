import React, { Suspense, lazy } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';
import Iframe from 'react-iframe'

const GridItem = lazy(() => import('./modules/GridItem'))

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    // backgroundColor: theme.palette.background.paper,
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
    display: 'flex',
    flexDirection: 'column',
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

const loading = (
<CircularProgress color="primary"/>
);

export default function About() {
  const classes = useStyles();

  return (
    <>
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <h1>About Us</h1>
          </Container>
          <Container maxWidth="sm">
            <Typography variant="h4" align="center" color="textPrimary" gutterBottom>
              Established Since 1995
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
                Vietnamese, Japanese, Chinese, and Korean goods
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
                Meat Deli and Fresh Vegetables
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
                Friendly service and fast checkout
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
                Foot stamps, credit (except Discover), debit accepted
            </Typography>
            <Typography variant="h5" align="center" paragraph>
            We're a small family operated market serving your needs for Asian meats, vegetables, and goods. The owner, Phat Nguyen, started it after quitting his previous job to spend more time with his family. We are committed to providing the best services for our customers. We are now one of the longest lasting Asian markets in Portland, OR because of our dedication and determination.
            </Typography>
          </Container>
        </div>
        <>
          <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2794.180199746168!2d-122.594795249021!3d45.54670043585335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5495a13632dafcb5%3A0xd7bdf78e08fe874c!2sNam%20Phuong%20Market!5e0!3m2!1sen!2sus!4v1567934431008!5m2!1sen!2sus" height="350" width="100%" />
        </>
      </main>
    </>
  );
}
