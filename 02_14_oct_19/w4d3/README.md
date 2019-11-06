AJAX; developing Slogram MVP.
===

Hey crew, thanks again for today's class. Today we used AJAX, to `GET` and `POST` `json` data from/to an API. We used the data from the API to render dynamic template, with the help of `jQuery`.

[In class demo code here](https://github.com/hafbau/lecture_notes/tree/master/02_14_oct_19/w4d3/slogram)

[Prewritten code here](https://github.com/hafbau/lecture_notes/tree/master/02_14_oct_19/w4d3/prewritten)

> #### To run the demos
> `cd` into the appropriate folder (`prewritten` or `slogram`);
> run `npm install` to install dependencies (just `express`);
> run `npm start`

E.g.

```bash
cd slogram
npm install
npm start
```

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

```js
$.ajax({
    url: 'https://jsonplaceholder.typicode.com/posts',
    method: 'GET',
    dataType: "json",
    success: (data) => {
        console.log('this request succeeded and here\'s the data', data);
    },
    error: (error) => {
        console.log('this request failed and this was the error', error);
    }
});
```

### Useful Links
* [Blog post coining AJAX](https://web.archive.org/web/20160305044414/http://adaptivepath.org/ideas/ajax-new-approach-web-applications/)
* [Post/Redirect/Get (PRG)](https://en.wikipedia.org/wiki/Post/Redirect/Get)
* [AJAX](https://en.wikipedia.org/wiki/Ajax_(programming))
* [XMLHttpRequest (XHR)](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)
* jQuery [AJAX](http://api.jquery.com/jquery.ajax/), [getJSON](https://api.jquery.com/jquery.getjson/), and [post](https://api.jquery.com/jquery.post/) methods


Thanks till next time 🤘🏿!