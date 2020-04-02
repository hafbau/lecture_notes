import React from 'react';
import profilePic from './profile-hex.png';
import './header.css';


export default function Header() {
  return (
    <div className="header">
      <header className="profile">
          <div>
            <img src={profilePic} />
          </div>
          <br />
          <div className="name">
            <h2>Amy Bemister</h2>
          </div>
      </header>
    </div>
  )
}
