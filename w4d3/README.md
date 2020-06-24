AJAX with jQuery
===

Hey crew, thanks again for today's class. Today we used AJAX, to `GET` and `POST` `json` data from/to an API. We used the data from the API to render dynamic template, with the help of `jQuery`.

[demo today is here](https://github.com/hafbau/lecture_notes/tree/master/w4d3/demo)

[Video will be here when upload is done](#)


## What we learrned (from the last time I did this lecture)

- We learned how to fetch data from an API server using jQuery
- We learned front end sanization of users input.
- A show of using XMLHTTPRequests and as it compares to jQuery Ajax. jQuery is syntactically nicer and also `polyfills` browsers quirks.
- XML and JSON are both data serialization formats used for data transfer. They are also both key/value pair datastructure


## To run the demos

```bash
cd demo
npm install
npm start
```

## Agenda Today
- [x] AJAX
- [x] XMLHttpRequest (XHR) Object
- [x] Use AJAX to retrieve data from an API
- [x] Use jQuery to update the DOM with the retrieved data
- [x] Use AJAX to submit data to an API
- [x] Refactoring


## Steps we took

 - to load all posts (betterGrams); we did this in two steps
    + make ajax get request to the server

    ```js
    $.getJSON('/api/posts')
    .then(posts => {
      // first step done; second step begins
    })
    ```

    + rendered all posts (betterGrams); we did this in multiple steps as well
      - loop through the posts we got back from server
      - for each one of the posts, create an html string that will represent the post. Using a predetermined template.
      Our template with data looked like so:

      ```js
      `
      <article class='post'>
        <div className="content">
          <img src="${data.image}" alt="" className="post-photo"/>
          <p className="text">${sanitize(data.text)}</p>
          <footer>
            <img src="${data.owner.avatar}" alt="" className="avatar"/>
            <em>${data.owner.name}</em>
          </footer>
        </div>
      </article>
      `
      ```

      - then append that html string to the post container in the DOM. Ours was `<section id='container'></section>`

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
    on post success (.then) AND rerender the posts (loadBGram())

  + checkout complete code in `./demo/public/app.js` and `./demo/public/helpers.js`


### What is AJAX?

**A**synchronous **J**avaScript **A**nd **X**ML

- allows us to make `http` requests without reloading the page
- could be more performant; only re-rendering the part of the page that has changed
- enables the back end to be separable from the front end. Thus, making the backend reusable with multiple front ends (e.g. the same back end could service a web application and a mobile app)

**XML** => e**X**tendable **M**arkup **L**anguage.

- Back then, XML was the defacto data transfer format. We use `JSON` predominantly currently.
- looks like `html` but extensible. You get to create your own tags e.g. `<name>Samir</name>`
- you then usually need a _parser_, to convert the XML formatted data into some `key-value` datastructure like javascript objects, in order to use the data.


### XMLHttpRequest Object

AJAX is implemented using the `XMLHttpRequest` (`XHR`) object

Modern libraries (such as `jQuery` or `axios`) provide us with easy-to-use wrappers for the `XHR` object. There is also `fetch` that's being implemented into browsers to be used in place of `XHR`.

### jQuery AJAX Example

_This uses a slightly different variation of the `$.ajax({})` input (settings) object. This one uses `success` and `error` callbacks while our demo used the promise (`.then`) version. And to a different url.

```js
$.ajax({
    url: 'https://jsonplaceholder.typicode.com/posts',
    method: 'GET',
    dataType: 
    success: (data) => {
        console.log('this request succeeded and here\'s the data', data);
    },
    error: (error) => {
        console.log('this request failed and this was the error', error);
    }
});
```

### jQuery Shorthand Methods
* jQuery has several shorthand methods so that we don't have to use the full `.ajax` method every time

```js
// make a get request to the specified endpoint
$.get('https://jsonplaceholder.typicode.com/posts');

// make a get request for JSON data
$.getJSON('https://jsonplaceholder.typicode.com/posts');

// make a post request
$.post('https://jsonplaceholder.typicode.com/posts', formData);
```

### Useful Links

* [You might not need jQuery](http://youmightnotneedjquery.com/)
* [Blog post coining AJAX](https://web.archive.org/web/20160305044414/http://adaptivepath.org/ideas/ajax-new-approach-web-applications/)
* [Post/Redirect/Get (PRG)](https://en.wikipedia.org/wiki/Post/Redirect/Get)
* [AJAX](https://en.wikipedia.org/wiki/Ajax_(programming))
* [XMLHttpRequest (XHR)](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)
* jQuery [AJAX](http://api.jquery.com/jquery.ajax/), [getJSON](https://api.jquery.com/jquery.getjson/), and [post](https://api.jquery.com/jquery.post/) methods


Thanks till next time 🤘🏿!