$(document).ready(function() {


  // Get tweets from the database and call the render function
  const loadTweets = () => {
      $.get('/tweets', function (data) {
        $('.tweets').empty(); //empties the container to not charge/render tweets multiple times
        $('textarea').val('');
        renderTweets(data);
      })
  }

  $('.tweets').on('reload', loadTweets).trigger('reload');

  // Prevents XSS 
  const escape = (str) => {
    let div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

  // Loop through the tweets and dynamically render each
  const renderTweets = (tweets) => {
    let tweetsContainer = $('.tweets').html('');
  
    tweets.forEach(function(tweet) {
      let tweetElement = createTweetElement(tweet);
      tweetsContainer.prepend(tweetElement);
    });

  }
  
  //Create the tweet HTML
  const createTweetElement = (tweetData) => {

    let $tweet = $("<article>").addClass("tweet");
  

    let html = `<header class="tweet--header">
          <div>
            <img class="tweet--avatar" src="${tweetData.user.avatars}">
            <h2 class="tweet--name">${tweetData.user.name}</h2>
          </div>
          <small class="tweet--handle">${tweetData.user.handle}</small>
        </header>

        <div class="tweet--body">
          <p>${escape(tweetData.content.text)}</p>
        </div>
      
        <footer class="tweet--footer">
          <small class="footer--age">${'10 days ago'}</small>
          <span class="footer--actions">
            <a href="#"><i class="fa fa-flag"></i></a>
            <a href="#"><i class="fa fa-retweet"></i></a>
            <a href="#"><i class="fa fa-heart"></i></a>' 
          </span>
      </footer>`

      let tweetElement = $tweet.append(html)

    return tweetElement;
  }

});



