import React, { Suspense, lazy } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';
import Iframe from 'react-iframe'

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import PhoneIcon from '@material-ui/icons/Phone'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import CreditCardIcon from '@material-ui/icons/CreditCard'
import ListItemAvatar from '@material-ui/core/ListItemAvatar';

const GridItem = lazy(() => import('../GridItem'))

const useStyles = makeStyles((theme) => ({
  infoList: {
    width: '100%',
    maxWidth: 580,
    backgroundColor: theme.palette.background.paper,
  },
  infoIcon: {
    backgroundColor: theme.palette.primary.main
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
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
          <Container maxWidth="xs">
            <List className={classes.infoList}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar className={classes.infoIcon}>
                    <AccessTimeIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Open Everyday" secondary="10 : 30 AM - 6 : 00 PM" />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar className={classes.infoIcon}>
                    <PhoneIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Phone Number" secondary="(503) 284 - 3549" />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar className={classes.infoIcon}>
                    <ShoppingCartIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Address" secondary="6834 NE Sandy Blvd. Portland, OR 97213" />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar className={classes.infoIcon}>
                    <CreditCardIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Accepted" secondary="EBT, Credit (except Discover), Debit" />
              </ListItem>
            </List>
            <Divider />
        </Container>
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
