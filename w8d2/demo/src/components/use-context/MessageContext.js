import React, { createContext , useState } from 'react';

const MessageContext = createContext();
// const MessageContext = createContext([
//   {
//     id: 1,
//     text: 'I am message one'
//   },
//   {
//     id: 2,
//     text: 'Inside of message two'
//   }
// ]);
const defaultState = [{
    id: 1,
    text: 'I am message one'
  },
  {
    id: 2,
    text: 'Inside of message two'
  }
]
export const MessageContextProvider = ({ children }) => {
  const [state, setState] = useState(defaultState);

  return (
    <MessageContext.Provider
      value={[ state, setState ]}
    >
      {children}
    </MessageContext.Provider>
  )
}


export default MessageContext;