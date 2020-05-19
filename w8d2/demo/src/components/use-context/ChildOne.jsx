import React, { useContext } from 'react'
import MessageContext from './MessageContext';

export default function ChildOne() {
  const messages = useContext(MessageContext)
  
  return (
    <>
      <h3>
        Child One
      </h3>
      <p>{messages[0].text}</p>
    </>
  )
}
