import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import TweetsList from './components/TweetsList';
const fakeTweets = [{
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd"
    },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

function App() {
  const [tweets, setTweets] = React.useState(fakeTweets)
  return (
    <div className="App">
      <Nav />
      <header>Header should be here</header>
      <TweetsList tweets={tweets} />
    </div>
  );
}

export default App;
