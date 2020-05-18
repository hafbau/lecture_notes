import React, {useContext} from 'react'
import MessageContext from './MessageContext'

const ChildTwo = () => {
  const messages = useContext(MessageContext)
  return (
    <div>
      Child Two wuz ere
      <p>{messages[1].text}</p>
    </div>
  )
}

export default ChildTwo
