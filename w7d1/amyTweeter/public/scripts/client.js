/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const renderTweets = function(tweets) {
  $('.tweets-container').empty();
  // loops through tweets
  for (let tweet of tweets) {
  // calls createTweetElement for each tweet
    const newTweet = createTweetElement(tweet);
    // takes return value and appends it to the tweets container
    $('.tweets-container').prepend(newTweet);
  }
};

const escape =  function(str) {
  let div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

const timeSince = function(date) {
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

const createTweetElement = function(tweet) {
  let $tweet = `
  <section class="tweet-container">
    <article class="tweet">
      <header class="tweet-header">
        <div class="profile">
          <img src="${tweet.user.avatars}">
          <span><strong>${tweet.user.name}</strong></span>
        </div>
        <div class="tweeter-handle"><strong>${tweet.user.handle}</strong></div>
      </header>
      <section class="tweeter">${escape(tweet.content.text)}</section>
      <footer>
        <div class="date-posted"><strong>${timeSince(tweet.created_at)}<strong></div>
        <div class="icons">
        <i class="fas fa-flag"></i>
        <i class="fas fa-retweet"></i>
        <i class="fas fa-heart"></i>
      </footer>
    </article>
  </section>
`;
  return $tweet;
};

$(document).ready(function() {

  $(".arrow-bounce").click(function() {
    $(".new-tweet").toggle();
    $("#tweet-input").focus();
  });

  $("#new-tweet").submit(function(ev) {
    ev.preventDefault();
    
    const formData = $(this).serialize();
    $.post('/tweets/', formData, function(tweet) {
      
      $.getJSON('/tweets/', function(updatedTweets) {
        renderTweets(updatedTweets);
      });
      $("#tweet-input").val("");
      $('span.counter').text(140);
    });
  });
});