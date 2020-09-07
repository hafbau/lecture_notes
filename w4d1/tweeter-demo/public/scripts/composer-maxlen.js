$(function() {

  $(".form__textarea").on('keyup', function(evt) {
    let $input   = $(this);
    let $form    = $input.closest('form');
    let $counter = $form.find('.form__counter')

    let len = $input.val().length;

    let charsLeft = 140 - len;
    $counter.html(charsLeft);

    if (charsLeft < 0) {
      $counter.addClass('form--red');
    } else {
      $counter.removeClass('form--red');
    }
  });

});
