import React, { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Link from '@material-ui/core/Link'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import LogoIcon from '../../data/nplogo-freelogodesign.png'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined'

import Drawer from '@material-ui/core/Drawer'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied'
import PhotoIcon from '@material-ui/icons/Photo'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'

import { handleLinkAnalytics } from '../../utils/analytics'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  list: {
    width: 'auto',
    backgroundColor: '#0d47a1',
    background: 'linear-gradient(45deg, #0d47a1 60%, #21CBF3 90%)',
    color: 'white',
    height: '100%'
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  navbar: {
    backgroundColor: '#0d47a1',
    background: 'linear-gradient(45deg, #0d47a1 10%, #21CBF3 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)'
  },
  title: {
    flexGrow: 1,
    textDecoration: 'none'
  }
}))

const AppNavbar = () => {
  const [open, setOpen] = useState(false)
  const classes = useStyles()

  const drawerList = () => (
    <div
      className={classes.list}
      role='presentation'
      onClick={(e) => setOpen(false)}
      onKeyDown={(e) => setOpen(false)}
    >
      <List>
        <img
          style={{
            width: '100px',
            height: '90px',
            marginLeft: 'auto',
            marginRight: 'auto',
            display: 'block'
          }}
          src={LogoIcon} alt='Logo'
        />
        <ListItem button>
          <ListItemIcon><HomeOutlinedIcon /></ListItemIcon>
          <Link
            onClick={handleLinkAnalytics('/')}
            component={RouterLink}
            to='/'
            variant='h5' color='inherit' style={{ textDecoration: 'none' }} noWrap
          >
            Home
          </Link>
        </ListItem>
        <ListItem button>
          <ListItemIcon><SentimentSatisfiedIcon /></ListItemIcon>
          <Link
            onClick={handleLinkAnalytics('/testimonials')}
            component={RouterLink}
            to='/testimonials'
            variant='h5' color='inherit' style={{ textDecoration: 'none' }} noWrap
          >
            Testimonials
          </Link>
        </ListItem>
        <ListItem button>
          <ListItemIcon><ChatBubbleOutlineIcon /></ListItemIcon>
          <Link
            onClick={handleLinkAnalytics('/contact')}
            component={RouterLink}
            to='/contact'
            variant='h5' color='inherit' style={{ textDecoration: 'none' }} noWrap
          >
            Contact Us
          </Link>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem>
          <Typography style={{ color: 'white' }} variant='h6'>Photos</Typography>
        </ListItem>
        <ListItem button>
          <ListItemIcon><PhotoIcon /></ListItemIcon>
          <Link
            onClick={handleLinkAnalytics('/grocery')}
            component={RouterLink} to='/grocery'
            variant='h5' color='inherit' style={{ textDecoration: 'none' }} noWrap
          >
            Grocery
          </Link>
        </ListItem>
        <ListItem button>
          <ListItemIcon><PhotoIcon /></ListItemIcon>
          <Link
            onClick={handleLinkAnalytics('/nonfoods')}
            component={RouterLink} to='/nonfoods'
            variant='h5' color='inherit' style={{ textDecoration: 'none' }} noWrap
          >
            Kitchen Supplies
          </Link>
        </ListItem>
        <ListItem button>
          <ListItemIcon><PhotoIcon /></ListItemIcon>
          <Link
            onClick={handleLinkAnalytics('/vegetablesgallery')}
            component={RouterLink} to='/vegetablesgallery'
            variant='h5' color='inherit' style={{ textDecoration: 'none' }} noWrap
          >
            Fresh Vegetables
          </Link>
        </ListItem>
        <ListItem button>
          <ListItemIcon><PhotoIcon /></ListItemIcon>
          <Link
            onClick={handleLinkAnalytics('/fridgegallery')}
            component={RouterLink} to='/fridgegallery'
            variant='h5' color='inherit' style={{ textDecoration: 'none' }} noWrap
          >
            Fridge Products
          </Link>
        </ListItem>
      </List>
    </div>
  )

  const toggleDrawer = () => setOpen(!open)

  return (
    <div className={classes.root}>
      <AppBar className={classes.navbar} position='fixed'>
        <Toolbar>
          <IconButton edge='start' className={classes.menuButton} color='inherit' aria-label='menu' onClick={(e) => toggleDrawer()}>
            <MenuIcon />
          </IconButton>
          <img style={{ width: '100px', height: '90px' }} src={LogoIcon} alt='Logo' />
          <Link component={RouterLink} to='/' variant='h5' color='inherit' className={classes.title}>
            Nam Phuong Market
          </Link>
        </Toolbar>
      </AppBar>
      <Drawer anchor='left' open={open} onClose={(e) => setOpen(false)}>
        {drawerList()}
      </Drawer>
    </div>
  )
}

export default AppNavbar
