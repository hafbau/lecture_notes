const getTweetsFromServer = function() {
  $.ajax({
    url: "/tweets",
    method: "GET"
  }).then(function (tweets) {
    renderTweets(tweets)
  });
}

const postTweetToServer = function(event) {
  event.preventDefault();
  // console.log('this :', this);
  // value = $('textarea').val()
  // data = 'text=' + value
  const data = $(this).serialize()
  console.log('data :', data);
  $.ajax({
    url: "/tweets",
    method: "POST",
    data: data
  }).then(function (createdTweet) {
    console.log('RESPONSE', createdTweet)
    
    getTweetsFromServer()
  });
}