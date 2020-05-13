import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

const lostImg = () => [
  'https://image.shutterstock.com/z/stock-vector-silhouette-of-a-labrador-retriever-puppy-with-words-lost-dog-vector-illustration-472190353.jpg',
  'https://thumbs.dreamstime.com/z/lost-dog-speech-bubble-saying-bony-poor-vector-color-line-illustration-card-white-background-you-can-put-your-own-text-68106106.jpg',
  'https://lwlies.com/wp-content/uploads/2018/03/website-1108x0-c-default.jpg',
  'https://image.shutterstock.com/z/stock-vector-missing-dog-poster-doodle-vector-illustration-174404720.jpg',
][Math.floor(Math.random() * 4)];

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: '100%',
    height: '100%',
  },
}));

const randCol = () => Math.ceil(Math.random() * 3)
export default function ImageGridList({ images }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={360} className={classes.gridList} cols={5}>
        {images.map((img) => (
          <GridListTile key={img.id} cols={randCol()}>
            <img src={img.url} alt={img.url} onError={(e) => e.target.src = lostImg()} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}