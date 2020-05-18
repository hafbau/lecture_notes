import React, { createContext , useState } from 'react';

const defaultState = [
  {
    id: 1,
    text: 'I am message one'
  },
  {
    id: 2,
    text: 'Inside of message two'
  }
]
const MessageContext = createContext(defaultState);


export default MessageContext;