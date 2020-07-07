import React from 'react';
import './nav.css'

export const Nav = () => {
  return (
    <nav>
      <span className="logo">tweeter</span>
      <span className="write-tweet">
        <strong>Write</strong>
        a new tweet
      </span>
      <div className="arrow-bounce">
        <img src="/images/angle-double-down.png" />
      </div>
    </nav>
  )
}

export default Nav;