import React from 'react';
import './composer.css';


const Composer = ({ showCompose }) => (
  showCompose ? (
    <section className="new-tweet">
      <div className="main">
        <form id="new-tweet" method="POST" action="/tweets/">
          <span className="error1">Your tweet is too long. Exceeded 140 character limit.</span>
          <textarea id="tweet-input" name="text" required placeholder="What are you humming about?"></textarea>
          <input type="submit" value="Tweet" />
          <span className="counter">140</span>
        </form>
      </div>
    </section>
  ) : null
)

export default Composer;