const renderLogo = function () {
  return `
    <span class="logo">tweeter</span>
  `
}
const renderNav = function () {
  const navHtml =  `
    <nav>
      ${renderLogo()}
      <span class="write-tweet"><strong>Write</strong> a new tweet</span>
      <div class="arrow-bounce"><img src="/images/angle-double-down.png"></div>
    </nav>
  `;

  $('body').prepend(navHtml);
}

const renderProfileHeader = function () {
  const headerHtml = `
    <div class="header">
      <header class="profile">
          <div>
            <img src="/images/profile-hex.png">
          </div>
          <br>
          <div class="name">
            <h2>Amy Bemister</h2>
          </div>
      </header>
    </div>
  `;
  $('body').append(headerHtml);
}

const renderComposer = function () {
  const composerHtml = `
    <section class="new-tweet">
      <div class="main">
        <form id="new-tweet" method="POST" action="/tweets/">
          <span class="error1">Your tweet is too long. Exceeded 140 character limit.</span>
          <textarea id="tweet-input" name="text" required placeholder="What are you humming about?"></textarea>
          <input type="submit" value="Tweet"">
          <span class="counter">140</span>
        </form>
      </div>
    </section>
  `;

  $('main.container').prepend(composerHtml);
}

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

const renderTweets = function (tweets) {
  $('.tweets-container').empty();
  // loops through tweets
  for (let tweet of tweets) {
    // calls createTweetElement for each tweet
    const newTweet = createTweetElement(tweet);
    // takes return value and appends it to the tweets container
    $('.tweets-container').prepend(newTweet);
  }
};