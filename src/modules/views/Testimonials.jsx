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
  // const [expanded, setExpanded] = React.useState(false);

  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };

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
                    {/* <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                        {renderStars(review.stars)}
                        </IconButton>
                        <IconButton
                        className={classes.expandOpen}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                        >
                        <ExpandMoreIcon />
                        </IconButton>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                        <Typography paragraph>Method:</Typography>
                        <Typography paragraph>
                            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                            minutes.
                        </Typography>
                        </CardContent>
                    </Collapse> */}
                </Card>
                  </>
              ))
          }
    </Container>
  );
}
