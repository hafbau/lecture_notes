import React, { useContext } from 'react'
import MessageContext from './MessageContext'

const ChildOne = () => {
  const [messages, setMessages] = useContext(MessageContext)
  const addMessage = (text) => {
    setMessages([...messages, { id: 3, text }])
  }
  console.log('messages :', messages);
  return (
    <div>
      <h2>Child One FTW</h2>
      <p>{messages[0].text}</p>
      <button onClick={() => addMessage('new text')}>Add Message</button>
    </div>
  )
}

export default ChildOne
