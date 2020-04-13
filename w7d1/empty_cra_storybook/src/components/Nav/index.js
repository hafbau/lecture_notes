import React from 'react'
import './nav.css';


const Nav = ({ companyName }) => (
   <nav>
      <span className="logo">{companyName || 'Acme'}</span>
      <span className="write-tweet"><strong>Write</strong> a new tweet</span>
      <div className="arrow-bounce">
        <img src="/images/angle-double-down.png" />
      </div>
    </nav>
)

export default Nav;
