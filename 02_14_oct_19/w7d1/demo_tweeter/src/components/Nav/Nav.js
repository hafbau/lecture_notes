import React from 'react';
import doubleAngle from './angle-double-down.png';
import './nav.css'

const Nav = ({ toggleCompose }) => {
  return (
    <nav>
      <span className="logo">tweeter</span>
      <span className="write-tweet"><strong>Write</strong> a new tweet</span>
      <div className="arrow-bounce" onClick={toggleCompose}>
        <img src={doubleAngle} />
      </div>
    </nav>
  )
}

export default Nav;