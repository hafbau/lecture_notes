Promises with Hafiz
===

## Agenda Today

- [x] Review of Callbacks (Sync / Async) [5m]

- [ ] Classwork Agile Manifesto [15m](https://github.com/hafbau/w2d4_classwork)
      + Fork & Clone this repo - All of you
      + Breakout rooms
      + Write your code in the `01_classwork.js`

- [ ] Callback waterfall (Hell) [5m]

- [ ] Intro to promises: Profile Generator promises [10m]

      - Promises are JS objects that are handle used to handle asynch flow
      - They have 3 states
      - pending - this is the initial state
      - resolved - to resolve a promise, we have to wait aka we have to call `.then` method with a callback of what to do with the resolved value
      - rejected - bad things happen. Not expected result

- [ ] Refactor Classwork Agile to Promises [15m]

- [ ] More Promises [40m]
      + Error handling
      + Make a promise
      + Promise.all / Promise.race
- [ ] Quiz [10]
      - [Quiz](https://gist.github.com/hafbau/d6a023b7aff7f0dae80c11d4c23ec026)


### What we learned

- Promises have three state (pending, resolve, rejected)
- They are valid JS objects. Created from a `Promise` blueprint different from object literals e.g. `{}`
- We could include both `.then` and `.catch` calls in a `promise chain`
- reviewed difference between async callbacks vs synchronous callbacks.