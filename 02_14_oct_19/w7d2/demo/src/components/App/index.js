import React, { useEffect, useState, Fragment } from 'react';
import './App.css';

import Nav from '../Nav';
import Header from '../Header';
import Composer from '../Composer';
import TweetList from '../TweetsList';

const App = () => {
  const [showCompose, setShowCompose] = useState(true);

  useEffect(() => {
    // fetch('http://localhost:8080/tweets')
    // .then(res => res.json())
    // .then(body => {
    //   console.log('body :', body);
    // })
    // .catch(err => console.log('err :', err))
  })
  return (
    <Fragment>
      <Nav toggleCompose={() => setShowCompose(!showCompose)} />
      <Header />
      <Composer showCompose={showCompose} />
      <TweetList tweets={undefined} />
    </Fragment>
  );
}

export default App;
