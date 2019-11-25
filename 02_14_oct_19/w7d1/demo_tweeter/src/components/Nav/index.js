import React from 'react'
import './nav.css';
import angleDoubleDown from './angle-double-down.png';

export const Nav = () => (
  <nav>
    <span className="logo">tweeter</span>
    <span className="write-tweet"><strong>Write</strong> a new tweet</span>
    <div className="arrow-bounce"><img src={angleDoubleDown} /></div>
  </nav>
)

export default Nav;

// import { Nav } from ""
// import  Nav, { Some } from ""
