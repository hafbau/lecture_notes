import React from 'react'
import './tweetlist.css';
import Tweet from '../Tweet';
// import { tweets as fakeTweets } from './tweets_list.stories';

export default function TweetsList(props) {
  const { tweets = [] } = props;
  console.log('tweets :', tweets);
  // const tweets = props.tweets
  const renderTweets = tweets.map(tweet => <Tweet key={tweet.created_at} {...tweet} />)
  // const renderTweets = tweets.map(tweet => <Tweet key={tweet.created_at} user={tweet.user} content={tweet.content} />)
  return (
    <section className="tweets-container">
      {renderTweets}
      {/* {tweets.map(tweet => <Tweet createdAt={tweet.created_at} user={tweet.user} />)} */}
    </section>
  )
}
