$(document).ready(function() {
  $('.handle').hide();

  $('.article').hover(function() {
    $(this).find('.handle').show();
    $(this).find('.handle').css('color' , '6px 6px rgb(00, ff, dd)')
    $(this).css('box-shadow' , '6px 6px rgb(142, 168, 192)')
  } , function() {
    $(this).find('.handle').hide();
    $(this).css('box-shadow' , "")
    $(this).find('.handle').css('color' , '6px 6px rgb(00, ff, dd)')
  }
  )
})