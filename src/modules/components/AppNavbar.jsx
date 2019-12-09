import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';
import Link from '@material-ui/core/Link';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

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

const navbarItems = {
  'Grocery': '/grocery',
  'Fresh Vegetables': '/vegetablesgallery',
  'Fridge Products': '/fridgegallery'
}

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
        {['Testimonials'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon><SentimentSatisfiedIcon /></ListItemIcon>
            <Link href="/testimonials" variant="h5" color="inherit" style={{ textDecoration: 'none' }} noWrap>
              {text}
            </Link>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <ListItem>
        <Typography style={{ color: 'white' }} variant="h6">Photos</Typography>
        </ListItem>
        {Object.keys(navbarItems).map((item, index) => (
          <ListItem key={index} button>
            <ListItemIcon><PhotoIcon /></ListItemIcon>
            <Link href={navbarItems[item]} variant="h5" color="inherit" style={{ textDecoration: 'none' }} noWrap>
              {item}
            </Link>
          </ListItem>
        ))}
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
          <Link href="/" variant="h5" color="inherit" className={classes.title}>
            Nam Phuong Market
          </Link>
            <Fab variant="extended" onClick={e => window.scrollTo({ top: 0, behavior: 'smooth' })}>
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
