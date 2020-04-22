AJAX with jQuery
===

## Agenda Today
- [x] AJAX
- [x] XMLHttpRequest (XHR) Object
- [x] Use AJAX to retrieve data from an API
- [x] Use jQuery to update the DOM with the retrieved data
- [x] Use AJAX to submit data to an API



## AJAX
Asynchronous Javascript and XML

long polling

eXtensible markup language
  key value
  <Name>Sean</Name>
  <Adress>
    <unit-no>272</unit-no>
  </Adress>

## XMLHttpRequest (XHR) Object


## Demo
the viralGram

## Refactoring


## Take aways

- Refresh to see changes to your code
- Reminder of promises syntax
- Refactor chunky code to resuable functions
- don't trust any user inputs - sanitize all the things
- save the value of `this` in a variable
- jquery makes ajax requests a lot simpler than vanilla JS

## Steps we took

 - to load all posts (viralGrams); we did this in two steps
    + make ajax get request to the server

    ```js
    $.getJSON('/api/posts)
    .then(posts => {
      // first step done; second step begins
    })
    ```

    + rendered all posts (viralGrams); we did this in multiple steps as well
      - loop through the posts we got back from server
      - for each one of the posts, create an html string that will represent the post. Using a predetermined template.
      Our template with data looked like so:

      ```js
      `
      <article>
        <img src="${post.photo}" alt="">
        <h3 class="title">${post.title}</h3>
        <p class="body">${post.body}</p>
        <footer>
          <strong class="username">${post.user.name}</strong>
          <img class="avatar" src="${post.user.avatar}" alt="">
        </footer>
      </article>
      `
      ```

      - then append that html string to the post container in the DOM. Ours was `<section id='container'></section>`
      
      - all together; rendering all posts looked like

      ```js
      //... previous code cut off for brevity; checkout ./demo/public/helpers.js file for complete loadPosts code
      const $postContainer = $('#container');
      for (const post of posts) {
        const postHtml = `
          <article>
            <img src="${escape(post.photo)}" alt="">
            <h3 class="title">${escape(post.title)}</h3>
            <p class="body">${escape(post.body)}</p>
            <footer>
              <strong class="username">${escape(post.user.name)}</strong>
              <img class="avatar" src="${escape(post.user.avatar)}" alt="">
            </footer>
          </article>
          `
        $postContainer.append(postHtml);
        }
      ```


- to make a post, here are the things we did:
  + add a listener on the form on submit
  ```js
  $('form').submit(function (event) {

  })
  ```

  + within the handler, we prevented event default so that the form does not submit as it would normally.

  ```js
  event.preventDefault()
  ```

  + we extracted data from the form using `$(this).serialize()`
  + make the post request
    on post success (.then) reset the form AND rerender the posts (loadPosts())

  + checkout complete code in `./demo/public/app.js` from line #11
