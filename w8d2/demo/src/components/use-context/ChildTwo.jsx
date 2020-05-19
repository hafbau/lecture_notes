import React, {useContext} from 'react'
import MessageContext from './MessageContext'
export default function ChildTwo() {
  const [messages, setMessages] = useContext(MessageContext)

  const addText = () => {
    setMessages([
      ...messages,
      { id: 3, text: 'This is sooo fake' }
    ])
  }
  console.log('messages :>> ', messages);
  return (
    <>
      <h3>
        Child Two
      </h3>
      <p>{messages[1].text}</p>
      <button onClick={addText}>Add Text</button>
    </>
  )
}
