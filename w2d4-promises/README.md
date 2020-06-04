Promises with Hafiz
===

Hey crew, thanks for another awesome class today. Hopefully today was as fun for you all as it was for me. Promises are awesome, keep an open mind, be patient and happy with your progress. You will get a lot of practice with promises going forward.

<a href="https://github.com/hafbau/lecture_notes/tree/master/w2d4-promises">Link to code repo here.</a>

_Video recording is being uploaded, I'll update once complete_


### What we learned

- For promises, the return of first function gets put into next .then statement (chaining promises)
- Saw the promises version of the `readline` library i.e. `readline-promise`
- Promises have three states (pending, resolve, rejected)
- Learned about method chaining; especially as it relates to promises.
- We could include both `.then` and `.catch` calls in a `promise chain`
- reviewed difference between async callbacks vs synchronous callbacks.
- They are valid JS objects. Created from a `Promise` blueprint different from object literals e.g. `{}`


## Agenda Today

- [x] Review of Callbacks (Sync / Async) [5m]
- [x] Classwork Agile Manifesto [3 + 10 + 5m](https://github.com/hafbau/w2d4_classwork)
      + Individual breakout rooms
      + Fork and clone this repo
      + Solve only `01_classwork.js`
- [x] Callback waterfall (Hell) [5m]
- [x] Intro to promises a.k.a would it not be cool, specifications [10m]
- [x] Refactor Classwork Agile to Promises [15m]
- [x] More Promises [20m]
      + [x] Error handling
      + [x] Promise.all / Promise.race
      + [-] Make a promise
- [x] [Quiz](https://gist.github.com/hafbau/d6a023b7aff7f0dae80c11d4c23ec026)[10m]


### Review

- What is asynchronous and why in Node?
- Asynchronous control flow mechanisms in JS that we currently know
- Quick check on what and why a callback?


###  More Asynchronous Callbacks

Lets review by reading the [Agile manifesto](https://agilemanifesto.org/) from disk, which, for us is broken into four parts / files: p1.txt, p2.txt, p3.txt, and p4.txt. Check code repo for `/1_classwork.js`


*Wouldn't it be cool to clean this ~hell~ waterfall up? Ideas?*

We discussed an hypothetical `.then` function to deal with callback hell and these are specs we discussed:

  - should take the return value of the current task and pass it to the next one
  - will have to be given (pass in) a function to execute next
  - chainable
  - should be able to catch / police errors


### Promises

```js
// nested callbacks
callbackOne((dataOne) => {
  callbackTwo((dataTwo) => {
    callbackThree((dataThree) => {
      callbackFour((dataFour) => {
        // do something
      });
    });
  });
});

// promises
functionOneReturningPromise()
  .then(() => {
    return functionTwoReturningPromise();
  })
  .then(() => {
    return functionThreeReturningPromise();
  })
  .then(() => {
    return 5656;
  })
  .then((num) => {
    console.log('num :', num);
    // do something
  });
```

*In words:*

- An object that may (or may not) resolve to a value in the future
- Offers an alternative solution to handling async programming
- Promises help us to avoid the _callback hell_ or _waterfall_
- Will be in one of three possible states:
  - `pending`: the promise has yet to resolve to a value or reject with an error
  - `fulfilled`: the promise resolved successfully to a value (calling the `resolve` callback)
  - `rejected`: the promise was rejected with an error (calling the `reject` callback)
  - We can call .then on a promise and we pass it a callback to handle SUCCESS
  - .then returns a (new) promise
  - Whatever our .then callback returns, will be fed into a subsequent .then callback
  - However, if we return a promise, then it actually passes the results/resolution of the promise into the next callback


### Error Handling

- A lot of Node callbacks use an _error-first_ approach where the first argument to the callback function is an error (if any) or null, and the second argument is the data. This can result in duplicated error handling logic in each callback in the chain.

```js
callbackOne((errOne, dataOne) => {
  if (errOne) {
    throw errOne
  }
  callbackTwo((errTwo, dataTwo) => {
    if (errTwo) {
      throw errTwo;
    }
    callbackThree((errThree, dataThree) => {
      if (errThree) {
        throw errThree;
      }
      // do something
    });
  });
});
```

- Promises allow us to handle any errors in the _Promise chain_ with a single `.catch()` on the end of the chain

```js
functionOneReturningPromise()
  .then(() => {
    return functionTwoReturningPromise();
  })
  .then(() => {
    return functionThreeReturningPromise();
  })
  .then(() => {
    // do something
  })
  .catch((error) => {
    // re throwing the error!
    throw error;
  });
```

- What if we want to handle specific errors in a specific way?
  + We saw that `.then` can take a second callback which will handle specific error of the particular `.then` branch. Like so:

```js
  functionOneReturningPromise()
  .then(
    // the callback below is for success (resolving)
    () => {
      return functionTwoReturningPromise();
    },
    // this second callback catches error specific to this .then
    (error) => {
      // Catches only the error caused by this .then
      // re throwing the error!
      console.log('error caused by functionTwoReturningPromise', error);
    }
  )
  .then(() => {
    return functionThreeReturningPromise();
  })
  .then(() => {
    // do another something
  })
  .catch((error) => {
    // Catches any error that has not being caught thus far
    // re throwing the error! We usually want to handle the error though.
    throw error;
  });

```

  + Feel free to come talk to me more about this.

### Running Async Operations in Parallel

- Instead of waiting for each operation to resolve before moving on to the next one, can run them in parallel?
  + can we do this with callbacks?
  + with methods like `Promise.all` and `Promise.race`
- These methods accept something that can be iterated over as an argument (usually an array)
- `Promise.all`: Waits for **all** of the promises to resolve/reject
- `Promise.race`: Waits for **any** of the promises to resolve/reject

```js
const promises = [promiseOne, promiseTwo, promiseThree];

Promise.all(promises)
  .then((arrayOfResults) => {
    console.log('results', arrayOfResults.join(', '));
  })
  .catch((error) => {
    throw error;
  });

Promise.race(promises)
  .then((firstResult) => {
    console.log('result of the first promise to resolve', firstResult);
  })
  .catch((error) => {
    console.error('error from the first promise to reject', error);
  });
```


### Creating Promises

> *We did not get this in class; we did see it in quiz though*

- A new promise can be created using the `Promise` class
- The `Promise` constructor takes a callback that accepts two functions as arguments:
  - `resolve`: This callback is called when the operation has finished successfully
  - `reject`: This callback is called if the operation failed (usually with the error)

```js
const myPromise = new Promise((resolve, reject) => {
  // do something and resolve when finished or reject with an error
});

myPromise.then((data) => {
  // do something with the resolved promises data
});
```

Example for the `fs.readFile` method:

```js
const promiseP1 = new Promise((resolve, reject) => {
  fs.readFile('data/p1.txt', 'utf-8', (err, file) => {
    if (err) {
      reject(err);
    } else {
      // no err, there should be file!
      resolve(file);
    }
  })
})

promiseP1
  .then((p1) => {
    console.log('p1 :', p1);
    // do other stuff
  })
  .catch((err) => {
    console.log('Bad error :', err);
  })

```

### Useful Links

- [MDN: Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/prototype)
- [Wikipedia: Futures and promises](https://en.wikipedia.org/wiki/Futures_and_promises)

Thank you till next time!