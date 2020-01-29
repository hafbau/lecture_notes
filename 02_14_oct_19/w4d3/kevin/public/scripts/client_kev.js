/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


// const $tweet = $("<article>").addClass("tweet");

// Fake data taken from initial-tweets.json

// for (let i = 0; i < 1; i) {
//   console.log('kuhjsd', )
// }

// const getTweetsFromServer = require('./ajax')

jQuery(function($) {
  $('.name').on('click', getTweetsFromServer)

  const data = [{
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd"
    },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088 //ISO 8601 extended
  }
];

  const $tweetContainer = $(".container");
  
  // const createTweetElement = function(tweet) {
  //   const $tweetTemplate = $(".tweet:first").clone(true);
  //   $tweetTemplate.find(".userName").text(tweet.username);
  //   $tweetTemplate.find(".avatar").attr("src", tweet.avatar.src);
  //   $tweetTemplate.find(".tweet-text").text(tweet.text);
  //   return $tweetTemplate;
  // }

  // functions
  const renderTweets = function (tweets) {
    const $createdTweets = $(tweets.map(createTweetElement).join(" "));
    return $tweetContainer.append($createdTweets);
  };

  const createTweetElement = function (tweet) {
    const oneDay = 24 * 60 * 60 * 1000;
    const firstDate = new Date(tweet.created_at);
    const secondDate = new Date();
    const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
    const markup = `<article class="article">
    <header class="tweetCardTop">
      <div class="leftHeader">

        <div class="leftHeader">
          <img src=${tweet.user.avatars}>
          <div class="username">${tweet.user.name}</div>
        </div>
      </div>
      <div class="rightHeader">
        <div class="handle">${tweet.user.handle}</div>
      </div>
    </header>

    <div class="tweetCardBottom">
      <span class="tweetBody">${tweet.content.text}</span>
    </div>

    <footer class="tweetFooter">
      <div class="footerLeft">
        <span>${diffDays} days ago</span>
      </div>
      <div class="footerRight">
        <span>Social</span>
      </div>
    </footer>
  </article>`;
  
    return markup;
  
  }
  
  renderTweets(data);
  // use functions
});

// loops through tweets
// calls createTweetElement for each tweet
// takes return value and appends it to the tweets container



