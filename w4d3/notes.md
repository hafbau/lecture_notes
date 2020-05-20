AJAX with jQuery
===

## Agenda Today
- [x] AJAX
- [x] XMLHttpRequest (XHR) Object
- [x] Use AJAX to retrieve data from an API
- [x] Use jQuery to update the DOM with the retrieved data
- [ ] Use AJAX to submit data to an API



## AJAX

long polling

Asynchronous Javascript and XML

eXtensible markup language
  key value
  <Name>Sean</Name>
  <Adress>
    <unit-no>272</unit-no>
  </Adress>

## XMLHttpRequest (XHR) Object


## Demo
betterGram

Goals of this app

Using AJAX
- when you load the page; you see a list of bGrams (post) that have been created before
  + fetch data from api ✔️
  + show the user that data - by templating what a post looks like
- you can create your own post by entering a text
  - listening to onSubmit event on the form
    - prevent the browser from submitting
    - retrieve the data from the form
    - submit the form
    - decide what to do

## Refactoring


## What we've learrned

- We learned how to fetch data from an API server using jQuery
- We learned front end sanization of users input.
- A show of using XMLHTTPRequests and as it compares to jQuery Ajax. jQuery is syntactically nicer and also `polyfills` browsers quirks.
- XML and JSON are both data serialization formats used for data transfer. They are also both key/value pair datastructure

