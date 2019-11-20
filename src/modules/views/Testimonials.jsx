import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import StarIcon from '@material-ui/icons/Star'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';

import googleReviews from '../../data/googleReviews'

const useStyles = makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function Testimonials() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(0);

  const handleExpandClick = (e, newValue) => {
    setExpanded(newValue);
  };

  const authorName = (name) => {
    const abv = name.split(" ").map(part => {
        return part[0]
    })
      return abv
  }

  const renderStars = (stars) => {
  [...Array(stars).keys()].map(star => <StarIcon />)
  }

  return (
      <Container>
            <Paper square className={classes.root}>
              <Tabs
                value={expanded}
                onChange={handleExpandClick}
                variant="fullWidth"
                indicatorColor="secondary"
                textColor="secondary"
                aria-label="icon label tabs example"
              >
                <Tab icon={<PhoneIcon />} label="GOOGLE" />
                <Tab icon={<FavoriteIcon />} label="FACEBOOK" />
                <Tab icon={<PersonPinIcon />} label="YELP" />
              </Tabs>
            </Paper>
          {
              googleReviews.map((review, i) => (
                  <>
                <Card className={classes.card}>
                    <CardHeader
                        avatar={(
                        <Avatar aria-label="recipe" className={classes.avatar}>
                            {authorName(review.author)}
                        </Avatar>
                        )}
                        action={(
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                        )}
                        title={review.author}
                        subheader={renderStars(review.stars)}
                    />
                    <CardContent>
                        <Typography color="textSecondary">
                            {review.text}
                        </Typography>
                    </CardContent>
                </Card>
                  </>
              ))
          }


          
    </Container>
  );
}
