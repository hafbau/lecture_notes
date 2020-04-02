$(document).ready(function() {
  
});

$('#tweet-input').keyup(function() {
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
});
