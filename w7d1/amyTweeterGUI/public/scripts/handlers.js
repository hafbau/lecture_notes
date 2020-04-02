function toggleTweetInput() {
  $(".new-tweet").toggle();
  $("#tweet-input").focus();
}

function handleCreateTweet(ev) {
  ev.preventDefault();

  const formData = $(this).serialize();
  $.post('http://localhost:8080/tweets/', formData, function (tweet) {

    $.getJSON('http://localhost:8080/tweets/', function (updatedTweets) {
      renderTweets(updatedTweets);
    });
    $("#tweet-input").val("");
    $('span.counter').text(140);
  });
}

function countCharacters() {
  let count = 140;
  let length = $(this).val().length;
  if (length >= 140) {
    $('span.counter').css('color', 'red');
    $('.error1').slideDown("slow");
    $('#new-tweet').find(':submit').prop('disabled', true);
  } else if (length <= 140) {
    $('span.counter').css('color', 'DimGray');
    $('.error1').slideUp("slow");
    $('#new-tweet').find(':submit').prop('disabled', false);
  }
  let remainingChar = count - length;
  $('span.counter').text(remainingChar);
}