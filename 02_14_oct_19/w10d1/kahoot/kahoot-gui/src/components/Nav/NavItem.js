import React from 'react'

export const NavItem = ({ label, icon }) => {
  return (
    <div>
      {icon}
      <label>{label}</label>
    </div>
  )
}
