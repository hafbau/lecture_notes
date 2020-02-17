import React, { Fragment, useState } from 'react';
import './App.css';
import Nav from '../Nav';
import ProfilePx from '../ProfilePx/ProfilePx';
import TweetsList from '../TweetsList';
import Composer from '../Composer/index';

function App() {
  const stateArr = useState(true)


  const toggleCompose = () => stateArr[1](!stateArr[0]);
  return (
  <Fragment>
    <Nav toggleCompose={toggleCompose} />
    <ProfilePx />
    <Composer showCompose={stateArr[0]}/>
    <TweetsList />
  </Fragment>
  );
}

export default App;
