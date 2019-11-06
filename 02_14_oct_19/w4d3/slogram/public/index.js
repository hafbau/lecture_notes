// $(() => {

// })
$(document).ready(function() {
  $('#load-more').click(handleClick);

  $("#new-post").submit(function(ev) {
    console.log('submittting', $(this).serialize());
    ev.preventDefault();

    $.post('https://jsonplaceholder.typicode.com/posts', $(this).serialize(), function(data) {
      console.log('data :', data);
      $("#container").prepend(makePost(data))
    })
  })
})

handleClick()

