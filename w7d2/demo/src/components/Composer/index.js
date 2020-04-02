import React, { useState } from 'react';
import './composer.css';


const Composer = ({ showCompose, handleSubmit }) => {
  const [text, setText] = useState('');
  console.log('text', text)

  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit({ text: text })
  }
  return (
    showCompose ? (
      <section className="new-tweet">
        <div className="main">
          <form id="new-tweet" onSubmit={onSubmit}>
            <span className="error1">Your tweet is too long. Exceeded 140 character limit.</span>
            <textarea value={text} onChange={e => setText(e.target.value)} id="tweet-input" name="text" required placeholder="What are you humming about?"></textarea>
            <input type="submit" value="Tweet" />
            <span className="counter">140</span>
          </form>
        </div>
      </section>
    ) : null
  )
}

export default Composer;