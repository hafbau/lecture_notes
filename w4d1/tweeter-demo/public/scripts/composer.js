$(function() {

  //Check if tweet is valid
  function isTweetValid(inputElement){

    var $error = $('.error-container h4');
    var $errorContainer = $('.error-container');

   
    if (inputElement.val().length > 140) {  // is tweet longer than character limit

      $error.text('Too long. Plz rspct our arbitrary limit of 140 chars. #kthxbye.'); // inject error text
      $errorContainer.slideDown('fast'); // show error message

      return false;

    }else if (inputElement.val().length === 0){  // is tweet empty

      $error.text('Your post has nothing in it'); // inject error text
      $errorContainer.slideDown('fast'); // show error message

      return false;
    }

    // if validation passed and the error is visible, hide it 
    if($errorContainer.is(':visible')){
      $errorContainer.slideUp('fast');
    }

    return true

  }

  // On compose button click, show the new tweet form
  $('.btn').click(function() {
    var $section = $('.newtweet');
    if ($section.is(':visible')) {
      $section.slideUp('fast');
    } else {
      $section.slideDown('fast');
      $section.find('textarea').focus();
    }
  });



  $('.round-btn').click(function() {
    var $section = $('section.new-tweet');
    $(window).scrollTop(0)
    $section.slideDown('fast')
  })
  


  // On form submit

  // By Enter
  $(".form__textarea").keydown(function(event){
    if(event.keyCode == 13){
        $(".newtweet__form").submit();
    }
  });

  // By click
  $(".newtweet__form").submit(function(event) {

    event.preventDefault();

    var $form = $(this);
    var $input = $form.find('textarea');
    
    //validate tweet
    if(!isTweetValid($input)){
      return false
    }

    var formData = $form.serialize();
    //submit ajax request
    $.ajax({
      url: "/tweets",
      type: "post",
      data: formData
    }).done(function(data) {
      $input.val("").trigger('keyup');
      $('.tweets').trigger('reload');
    });

    return true;

  });

});
