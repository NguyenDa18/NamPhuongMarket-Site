import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const Copyright = () => (
  <footer>
    <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
        Nam Phuong Market
    </Typography>
    <Typography variant="body2" color="textSecondary" align="center">
        Copyright © {new Date().getFullYear()} &nbsp; Website Design by &nbsp;
      <Link color="inherit" href="https://danh-was-here.netlify.com" target="_blank">
            Danh Nguyen &nbsp;
      </Link>
    </Typography>
  </footer>
);

export default Copyright;
