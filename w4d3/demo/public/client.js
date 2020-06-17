// OUR SUBMIT A POST STRATEGY
// listening for user submitting the form (select the form and listen)
//  - stop the form from submitting as default
//  - extract the user submitted data from the form
//  - trigger an ajax POST request to our server
//  - then we get to choose what to do

// BEWARE OF DOCUMENT DOT READY
// We did not do document.ready in this file at all because we are loading in the scripts at the bottom of the page. That way we guarantee that the body is ready before we attempt to select elements on the page
$('#new-post').on('submit', function(event) {
  event.preventDefault();
  // We did not use $('input').val() to fetch values from the input because of maintenance - where we have many input elements to come through
  const data = $(this).serialize();

  $.post('/api/posts', data)
  .then(function(wateverWeget) {
    // We got nothing from the server: wateverWeget is undefined
    console.log('wateverWeget :>> ', wateverWeget);

    loadbetterGrams();
  })
})

// ALLOWS U to make request to their server: CORS
// $.getJSON('https://jsonplaceholder.typicode.com/posts', function(data) {
//   console.log('data :>> ', data);
// });
const loadbetterGrams = () => {
  $.getJSON('/api/posts')
    .then(function(data) {
      console.log('data PROMISE :>> ', data);
      // We needed to this emptying of the container to avoid duplicate posts in the container since we are continuously appending to it.
      $('#container').empty()
      for (const postData of data) {
        // The way we're doing templating here is unsafe and we are trusting the user inputs too much
        // We should be sanitizing the data from the user before displaying it.
        const betterGramHtml = `
          <article class='post'>
            <div class='content'>
              <img src="${postData.image}" alt="">
              <p class="text">${postData.text}</p>
              <footer class='post-footer'>
                <img class="avatar" src="${postData.owner.avatar}" alt="">
                <strong class="username">${postData.owner.name}</strong>
              </footer>
            </div>
          </article>
          `;
        $('#container').prepend(betterGramHtml)
      }
    });
}

// We need to call this function here first to enable the page to load up initial tweets
loadbetterGrams()