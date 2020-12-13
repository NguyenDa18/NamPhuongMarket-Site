import React from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'

const Footer = () => {
  return (
    <footer>
      <Container>
        <Grid container justify='center'>
          <Grid item xs={12}>
            <Typography variant='subtitle1' align='center' color='textSecondary' component='p'>
              Nam Phuong Market
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant='body2' color='textSecondary' align='center'>
              Copyright © {new Date().getFullYear()} &nbsp; Website Design by &nbsp;
              <Link color='inherit' href='https://danhwashere.com' target='_blank' rel="noreferrer">
                Danh Nguyen &nbsp;
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </footer>
  )
}

export default Footer
