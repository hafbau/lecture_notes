import React from 'react'
import Tweet from '../Tweet';

export default function TweetsList(props) {
  const { tweets } = props;
  // const tweets = props.tweets
  const renderTweets = tweets.map(tweet => <Tweet key={tweet.created_at} {...tweet} />)
  return (
    <section class="tweets-container">
      {renderTweets}
      {/* {tweets.map(tweet => <Tweet createdAt={tweet.created_at} user={tweet.user} />)} */}
    </section>
  )
}
