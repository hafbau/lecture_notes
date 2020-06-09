/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


$(document).ready(function() {
  renderNav();
  renderProfileHeader();
  renderComposer();

  $("body").on('click', '.arrow-bounce', toggleTweetInput);
  $("body").on('submit', '#new-tweet', handleCreateTweet);
  $('body').on('keyup', '#tweet-input', countCharacters);
});