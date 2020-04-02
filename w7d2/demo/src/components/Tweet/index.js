import React from 'react'

export default function Tweet({ user: { avatars, handle, name }, content: { text }, created_at}) {
  return (
    <section className="tweet-container">
      <article className="tweet">
      <header className="tweet-header">
        <div className="profile">
          <img src={avatars} />
          <span><strong>{name}</strong></span>
        </div>
        <div className="tweeter-handle"><strong>{handle}</strong></div>
      </header>
      <section className="tweeter">{text}</section>
      <footer>
        <div className="date-posted">
          <strong>{created_at}</strong>
        </div>
        <div className="icons">
          <i className="fas fa-flag"></i>
          <i className="fas fa-retweet"></i>
          <i className="fas fa-heart"></i>
        </div>
      </footer>
    </article>
  </section>
  )
}
