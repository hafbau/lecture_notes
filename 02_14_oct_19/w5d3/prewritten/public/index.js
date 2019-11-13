let startPage = 0;
$(() => {

  $('#new-post').on('submit', handleSubmit);
  $("#load-more").click(() => loadGrams(startPage++));

  loadGrams(startPage)
});
