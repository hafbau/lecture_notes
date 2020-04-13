import React from 'react';
import './App.css';
import Nav from './components/Nav'

const Profile = () => <header>This is my profile</header>
const TweetsContainer = () => < ul >
  I'm an little teapot
</ul>
function App() {
  return (
    <>
      <Nav />
      <Profile />
      <TweetsContainer />
    </>
  );
}

export default App;
