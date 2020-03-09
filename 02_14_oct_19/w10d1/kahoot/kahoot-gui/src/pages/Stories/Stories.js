import React from 'react';
import { SingleLineGridList } from '../../components/SingleLineGridList';
import { StoryCard } from '../../components/StoryCard';
import { Button, Grid, Typography } from '../../external_components';
import { useApi } from '../../api/useApi';

const categories = [
  {
    img: 'https://picsum.photos/90/120',
    title: 'Image',
    author: 'author',
  },
  {
    img: 'https://picsum.photos/90/120',
    title: 'Image',
    author: 'author',
  },
  {
    img: 'https://picsum.photos/90/120',
    title: 'Image',
    author: 'author',
  },
  {
    img: 'https://picsum.photos/90/120',
    title: 'Image',
    author: 'author',
  },
];

const getStoriesOpts = {
  crudType: 'GET_MANY',
  resource: 'stories'
}
export const Stories = () => {
  const [err, isLoading, stories] = useApi(getStoriesOpts)
  if(err) {
    return <Typography>{err.message}</Typography>
  }

  if (isLoading) return <Typography>Loading ...</Typography>

  if (!stories) {
    return <Typography>No stories yet. <Button>Start one now</Button></Typography>
  }
  return (
    <div>
      <SingleLineGridList tileData={categories}/>
      <Typography>Here are the recent stories</Typography>
      <Grid container spacing={3} justify='center' >
        {stories.map((story, idx) => (
          <Grid key={idx} item>
            <StoryCard {...story} />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

