import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

import { handleButtonAnalytics } from '../../utils/analytics'

const useStyles = makeStyles((theme) => ({
  heroButtons: {
    padding: theme.spacing(2, 0, 0)
  },
  phoneButton: {
    backgroundColor: '#ffc107'
  },
  fbButton: {
    color: '#0d47a1'
  },
  yelpButton: {
    backgroundColor: '#e62958'
  }
}))

const HeroImage = () => {
  const classes = useStyles()
  return (
    <>
      <header className='App-header' />
      <Container maxWidth='md' style={{ paddingBottom: '20px' }}>
        <div className={classes.heroButtons}>
          <Grid container spacing={3} justify='center'>
            <Grid item>
              <Button
                variant='contained'
                className={classes.phoneButton}
                onClick={handleButtonAnalytics('phone')}
                style={{ textDecoration: 'none', color: 'black' }}
                href='tel:+15032843549'
              >
                Call Us Now
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant='outlined'
                className={classes.fbButton}
                onClick={handleButtonAnalytics('Facebook')}
                style={{ textDecoration: 'none' }}
                target='_blank'
                href='https://www.facebook.com/namphuongmkt/'
              >
                Like Us On Facebook
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant='contained'
                className={classes.yelpButton}
                onClick={handleButtonAnalytics('Yelp')}
                style={{ textDecoration: 'none', color: 'white' }}
                target='_blank'
                href='https://www.yelp.com/biz/nam-phuong-market-portland'
              >
                Review Us On Yelp
              </Button>
            </Grid>
          </Grid>
        </div>
      </Container>
    </>
  )
}

export default HeroImage
