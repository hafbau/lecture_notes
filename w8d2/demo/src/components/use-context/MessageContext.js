import React, { createContext, useState } from 'react';

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

// returns a context wrapped value
const MessageContext = createContext(defaultState);

export const MessageContextProvider = ({ children }) => {
  const [state, setState] = useState(defaultState)

  return (
    <MessageContext.Provider
      value={[state, setState]}
    >
      {children}
    </MessageContext.Provider>
  )
}

export default MessageContext;