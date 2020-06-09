import React from 'react'
import './tweet.css'

const timeSince = function (date) {
  // function found at https://stackoverflow.com/a/3177838
  let seconds = Math.floor((new Date() - date) / 1000);
  let interval = Math.floor(seconds / 31536000);
  if (interval > 1) {
    return interval + " years ago";
  }
  interval = Math.floor(seconds / 2592000);
  if (interval > 1) {
    return interval + " months ago";
  }
  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    return interval + " days ago";
  }
  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    return interval + " hours ago";
  }
  interval = Math.floor(seconds / 60);
  if (interval > 1) {
    return interval + " minutes ago";
  }
  return Math.floor(seconds) + " seconds ago";
};

export default function Tweet(
  { user: { handle, avatars, name = "No name"},
  content: { text },
  created_at }
) {
  return (
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
        <div className="date-posted"><strong>{timeSince(created_at)}</strong></div>
        <div className="icons">
          <i className="fas fa-flag"></i>
          <i className="fas fa-retweet"></i>
          <i className="fas fa-heart"></i>
        </div>
      </footer>
    </article>
  )
}
