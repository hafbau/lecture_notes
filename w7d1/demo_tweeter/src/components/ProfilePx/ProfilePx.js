import React from 'react';
import profileImg from './profile-hex.png';
import './header.css'

const ProfilePx = () => (
  <div className="header">
    <header className="profile">
        <div>
          <img src={profileImg} alt="Profile picture" />
        </div>
        <br />
        <div className="name">
          <h2>Amy Bemister</h2>
        </div>
    </header>
  </div>
)

export default ProfilePx;