import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'

import AppAlert from '../components/AppAlert'
import Chip from '@material-ui/core/Chip'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Avatar from '@material-ui/core/Avatar'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import PhoneIcon from '@material-ui/icons/Phone'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import CreditCardIcon from '@material-ui/icons/CreditCard'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'

const useStyles = makeStyles((theme) => ({
  infoList: {
    width: '100%',
    maxWidth: 580
  },
  infoIcon: {
    backgroundColor: theme.palette.primary.main
  },
  heroContent: {
    padding: theme.spacing(2, 0, 5)
  },
  main: {
    marginTop: theme.spacing(7),
    marginBottom: theme.spacing(2)
  },
  chips: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5)
    }
  }
}))

export default function About () {
  const classes = useStyles()

  return (
    <>
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth='sm'>
            <List className={classes.infoList}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar className={classes.infoIcon}>
                    <AccessTimeIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary='Open Everyday' secondary='10 : 30 AM - 5 : 00 PM' />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar className={classes.infoIcon}>
                    <PhoneIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary='Phone Number' secondary='(503) 284 - 3549' />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar className={classes.infoIcon}>
                    <ShoppingCartIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary='Address' secondary='6834 NE Sandy Blvd. Portland, OR 97213' />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar className={classes.infoIcon}>
                    <CreditCardIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary='Accepted' secondary='EBT, Credit & Debit' />
              </ListItem>
            </List>
          </Container>
          <Divider variant='middle' />
        </div>

        <Container component='main' className={classes.main} maxWidth='sm'>
          <Typography variant='h2' component='h1' gutterBottom>
            About Us
          </Typography>
          <div className={classes.chips}>
            <Chip color='secondary' label='Impressive bargain prices' variant='outlined' />
            <Chip color='primary' label='Vietnamese, Japanese, Chinese, and Korean quality goods' variant='outlined' />
            <Chip color='secondary' label='Fresh meat and vegetable selection' variant='outlined' />
            <Chip color='primary' label='Seafood and poultry selection' variant='outlined' />
            <Chip color='secondary' label='Friendly service and fast checkout' variant='outlined' />
            <br />
          </div>
          <div className={classes.main}>
            <Typography variant='h4' align='center' color='primary' gutterBottom>
              Established Since 1997
            </Typography>
            <Typography variant='h5' align='center' paragraph>
              We're a small family operated market serving your needs for Asian goods, vegetables, meat, and seafood. The owner, Phat Nguyen, started it after quitting his previous job to spend more time with his family. We are committed to providing the best services and value for our customers. We are now one of the longest lasting Asian markets in Portland, OR because of our dedication and determination.
            </Typography>
          </div>
          <AppAlert />
        </Container>
        <>
          <iframe title='Nam Phuong Market Embedded Google Map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2794.180199746168!2d-122.594795249021!3d45.54670043585335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5495a13632dafcb5%3A0xd7bdf78e08fe874c!2sNam%20Phuong%20Market!5e0!3m2!1sen!2sus!4v1567934431008!5m2!1sen!2sus' height='350' width='100%' />
        </>
      </main>
    </>
  )
}
