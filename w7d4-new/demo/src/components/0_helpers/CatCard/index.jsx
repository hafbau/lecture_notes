import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: (props) => Math.ceil(Math.random() * 4) * 140,
  },
});

export default function MediaCard({ img }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={img}
          title="Contemplative Reptile"
        />
    </Card>
  );
}