import React from 'react';
import ChildOne from './ChildOne';
import ChildTwo from './ChildTwo';
import { MessageContextProvider } from './MessageContext';

const UseContext = () => {
  return (
    <MessageContextProvider>
      <h1>Use Context</h1>
      <ChildOne />
      <ChildTwo />
    </MessageContextProvider>
  )
};

export default UseContext;
