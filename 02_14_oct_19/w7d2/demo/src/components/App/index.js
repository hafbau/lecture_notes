import React, { useEffect, useState, Fragment } from 'react';
import axios from 'axios';
import './App.css';

import Nav from '../Nav';
import Header from '../Header';
import Composer from '../Composer';
import TweetList from '../TweetsList';

const App = () => {
  const [showCompose, setShowCompose] = useState(true);
  const [tweets, setTweets] = useState([]);
  const [submitted, setSubmitted] = useState(null)
  useEffect(() => {
    axios.get('http://localhost:8080/tweets')
      .then(function ({ data }) {
        // handle success
        console.log(data);
        setTweets(data);
        setSubmitted(null);
      })
      .catch(err => {
        console.error('ERRRROROROROR', err)
      })
  }, [submitted])
  
  const handleSubmit = (data) => {
    axios.post('http://localhost:8080/tweets', data)
    .then(() => {
      console.log(' submitted ')
      setSubmitted('fetched')
    })
    .catch(err => console.log('could not submit'))
  }


  
  return (
    <Fragment>
      <Nav toggleCompose={() => setShowCompose(!showCompose)} />
      <Header />
      <h3 style={{ display: `${submitted === 'fetched' ? 'block' : 'none'}` }}>
        Submitted Success
      </h3>
      <Composer showCompose={showCompose} handleSubmit={handleSubmit} />
      <TweetList tweets={tweets} />
    </Fragment>
  );
}

export default App;
