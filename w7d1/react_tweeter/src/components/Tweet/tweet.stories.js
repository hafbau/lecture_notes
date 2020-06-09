import React from 'react';
import Tweet from './Tweet';

export default {
  title: 'Tweet',
  component: Tweet,
};

const fakeTweet = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
}

export const Default = () => (
  // <Tweet
  //   user={fakeTweet.user}
  //   content={fakeTweet.content}
  //   created_at={fakeTweet.created_at}
  // />
  <Tweet
    { ...fakeTweet }
  />
)