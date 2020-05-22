import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';
import Link from '@material-ui/core/Link';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import LogoIcon from '../../data/nplogo-freelogodesign.png'

import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied'
import PhotoIcon from '@material-ui/icons/Photo'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  list: {
    width: 'auto',
    backgroundColor: '#0d47a1',
    color: 'white',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  navbar: {
    backgroundColor: '#0d47a1'
  },
  title: {
    flexGrow: 1,
    textDecoration: 'none'
  },
}));

const AppNavbar = () => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();


  const drawerList = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={(e) => setOpen(false)}
      onKeyDown={(e) => setOpen(false)}
    >
      <List>
        <ListItem>
          <ListItemIcon><SentimentSatisfiedIcon /></ListItemIcon>
          <Link
          component={RouterLink} to="/testimonials"
          variant="h5" color="inherit" style={{ textDecoration: 'none' }} noWrap>
            Testimonials
          </Link>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem>
        <Typography style={{ color: 'white' }} variant="h6">Photos</Typography>
        </ListItem>
        <ListItem button>
            <ListItemIcon><PhotoIcon /></ListItemIcon>
            <Link
            component={RouterLink} to="/grocery"
            variant="h5" color="inherit" style={{ textDecoration: 'none' }} noWrap>
              Grocery
            </Link>
        </ListItem>
        <ListItem button>
            <ListItemIcon><PhotoIcon /></ListItemIcon>
            <Link
            component={RouterLink} to="/vegetablesgallery"
            variant="h5" color="inherit" style={{ textDecoration: 'none' }} noWrap>
              Fresh Vegetables
            </Link>
        </ListItem>
        <ListItem button>
            <ListItemIcon><PhotoIcon /></ListItemIcon>
            <Link
            component={RouterLink} to="/fridgegallery"
            variant="h5" color="inherit" style={{ textDecoration: 'none' }} noWrap>
              Fridge Products
            </Link>
        </ListItem>
      </List>
    </div>
  );

  const toggleDrawer = () => setOpen(!open);

  return (
    <div className={classes.root}>
      <AppBar className={classes.navbar} position="fixed">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={(e) => toggleDrawer()}>
            <MenuIcon />
          </IconButton>
          <img style={{ width: '100px', height: '90px' }} src={LogoIcon} alt="Logo" />
          <Link component={RouterLink} to="/" variant="h5" color="inherit" className={classes.title}>
            Nam Phuong Market
          </Link>
            <Fab variant="extended" onClick={e => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ backgroundColor: '#ffc107', color: 'white' }}>
              <NavigationIcon />
              Top
            </Fab>
        </Toolbar>
      </AppBar>
      <Drawer anchor="bottom" open={open} onClose={(e) => setOpen(false)}>
        {drawerList()}
      </Drawer>
    </div>
  );
};

export default AppNavbar;
