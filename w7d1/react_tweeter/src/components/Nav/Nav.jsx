import React from 'react'
import doubleCaret from './angle-double-down.png'
import './nav.css'

const Nav = () => {
  return (
    <nav>
      <span className="logo">tweeter</span>
      <span className="write-tweet">
        <strong>Write</strong>a new tweet
      </span>
      <div className="arrow-bounce">
        <img src={doubleCaret} />
      </div>
    </nav>
  );
};

export default Nav;