import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
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
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import PhotoSizeSelectActualIcon from '@material-ui/icons/PhotoSizeSelectActual'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  list: {
    width: 'auto',
    backgroundColor: theme.palette.primary.main,
    color: 'white',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textDecoration: 'none'
  },
}));

const navbarItems = {
  'Grocery': '/grocery',
  'Fridge Products': '/fridgegallery',
  'Fresh Vegetables': '/vegetablesgallery'
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
        {['Testimonials', 'Starred'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
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
            <ListItemIcon><PhotoSizeSelectActualIcon /></ListItemIcon>
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
      <AppBar position="fixed">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={(e) => toggleDrawer()}>
            <MenuIcon />
          </IconButton>
          <Link href="/" variant="h5" color="inherit" className={classes.title} noWrap>
            Nam Phuong Market
          </Link>
        </Toolbar>
      </AppBar>
      <Drawer anchor="bottom" open={open} onClose={(e) => setOpen(false)}>
        {drawerList()}
      </Drawer>
    </div>
  );
};

export default AppNavbar;
