import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import { yellow } from '@material-ui/core/colors'
import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import StarIcon from '@material-ui/icons/Star'
import SearchIcon from '@material-ui/icons/Search'
import ChatIcon from '@material-ui/icons/Chat'
import ThumbUpIcon from '@material-ui/icons/ThumbUp'

import googleReviews from '../../data/googleReviews.json'
import facebookReviews from '../../data/facebookReviews.json'
import yelpReviews from '../../data/yelpReviews.json'

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  avatar: {
    backgroundColor: yellow[700]
  },
  headerAvatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main
  },
  card: {
    marginTop: '30px',
    marginBottom: '30px'
  }
}))

export default function Testimonials () {
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(0)

  const handleExpandClick = (e, newValue) => {
    setExpanded(newValue)
  }

  const authorName = (name) => {
    const abv = name.split(' ').map(part => {
      return part[0]
    })
    return abv
  }

  const renderStars = (stars) => [...Array(stars).keys()].map((i, star) => <StarIcon key={i} />)

  let reviewData
  switch (expanded) {
    case 0:
      reviewData = googleReviews
      break
    case 1:
      reviewData = facebookReviews
      break
    case 2:
      reviewData = yelpReviews
      break
    default:
      reviewData = googleReviews
  }

  return (
    <Container className={classes.container} component='main' maxWidth='lg'>
      <Typography component='h1' variant='h2' align='center' color='textPrimary' gutterBottom>
        Testimonials
      </Typography>
      <Paper square className={classes.root}>
        <Tabs
          value={expanded}
          onChange={handleExpandClick}
          variant='fullWidth'
          indicatorColor='secondary'
          textColor='secondary'
          aria-label='icon label tabs example'
        >
          <Tab icon={<SearchIcon />} label='GOOGLE' />
          <Tab icon={<ThumbUpIcon />} label='FACEBOOK' />
          <Tab icon={<ChatIcon />} label='YELP' />
        </Tabs>
      </Paper>
      {
              reviewData.map((review, i) => (
                <Card key={i} className={classes.card}>
                  <CardHeader
                    key={i}
                    avatar={(
                      <Avatar aria-label='recipe' className={classes.avatar}>
                        {authorName(review.author)}
                      </Avatar>
                        )}
                    title={review.author}
                    subheader={renderStars(review.stars)}
                  />
                  <CardContent>
                    <Typography color='textSecondary'>
                      {review.text}
                    </Typography>
                  </CardContent>
                </Card>
              ))
          }

    </Container>
  )
}
