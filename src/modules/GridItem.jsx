import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const GridItem = ({ classes }) => (
  <Grid item xs={12} sm={6} md={4}>
    <Card className={classes.card}>
      <CardMedia
        className={classes.cardMedia}
        image="https://source.unsplash.com/random"
        title="Image title"
      />
      <CardContent className={classes.cardContent}>
        <Typography gutterBottom variant="h5" component="h2">
        Heading
        </Typography>
        <Typography>
        This is a media card. You can use this section to describe the content.
        </Typography>
      </CardContent>
    </Card>
  </Grid>

);

export default GridItem;
