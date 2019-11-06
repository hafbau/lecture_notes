const handleClick = function(ev) {
  //make that call
  $.ajax({
    url: 'https://jsonplaceholder.typicode.com/posts',
    method: 'GET',
    dataType: 'json',
    success: function (data) {
      console.log('data is back :', data);
      data.forEach(post => {
        $('#container').append(makePost(post));
      })

    },
    error: function (err) {
      console.error('Error :', err);
    }
  })
}
