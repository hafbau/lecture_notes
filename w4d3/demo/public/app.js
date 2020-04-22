// ON PAGE LOAD GET ALL POSTS
loadPosts();
// $.ajax({
//   type: 'POST',
//   data: ,
//   success:
//   fail: 
// })

$('form').submit(function(event){
  // prevent the default behaviour of html form
  event.preventDefault();
  const self = this;
  // extract data from `this` - the form
  const formData = $(this).serialize(); // urlencoded serialization format
  // make ajax post with extracted data
  $.post('/api/posts', formData)
  // if sucess - render updated posts
  .then(() => {
    // $('form') but that is slightly less performant
    $(self)[0].reset();
    loadPosts()
  })
  // else - do nothing; console.error
  .catch(err => console.log('err :>> ', err))
})