## Client-side Javascript and jQuery

### Agenda

- [] Intro to frontend JS
- [] What DOM?
- [] Let's manipulate the DOM
- [] DOM Events
- [] Intro to jQuery

### Intro to frontend JS

Context matters.

process (and all methods e.g process.argv), setTimeout, require, window, fs, console, navigator,
document, module, exports, export, npm, location

| Backend (NodeJS) | Frontend (Browser) | Both |
|:----------------:|:------------------:|:----:|
| process | | setTimeout |
| require | Window |
| fs |
| | | console |
| | Navigator |
| | Document |
| Module |
| Export(s) |
| npm |
| | location |


### What is the DOM

- Meet Dominic; a married busy mom of two, trying to stay sane. She meets the Browser Yoda, and the browser said the answer is the DOM!
- It's the way the browser organizes our HTML / CSS for easy access by code (JS).
- HTML DOM is a tree datastructure whose nodes are HTML elements, their contents and their attributes
- Visualization helps:

```html
<html>
  <head>
    <title>My Page</title>
  </head>
  <body>
    <h1>Welcome to my page!</h1>
    <div class="content">
      <p>My Favourite Numbers</p>
      <ul id="main-list">
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
      </ul>
    </div>
  </body>
</html>
```

![DOM example](./01_vanilla_dom/dom-example.png)

### Let's manipulate the DOM [10m]

#### Create / Select / Insert
[Demo Vanila](./01_vanilla_dom/manipulation_example)

### DOM Events
- A mother knows. The browser is truly a mother.
- Just like mother nature sends us all this signals - climate change / global warming,
  + And we (our government) only listen to a few? Realistically so.
  + We (using JS) can listen to events from the browser.

- DevTool example monitoring all events (monitorEvents / unmonitorEvents)
- DevTool example listening to 'mousemove'


[Demo Vanila Farts](./01_vanilla_dom/events_example)

# B R E A K

### Intro to jQuery

- Wayback when browser wars
- Cleaner syntax while dealing with browser vendor's implementation differences
- youmightnotneedjquery.com

#### Demo farts button
https://jsfiddle.net/encw11fk/7/

#### Demo single article
https://jsfiddle.net/vpdmbfb9/4/

#### Demo articles array
https://jsfiddle.net/x41fbsaq/

