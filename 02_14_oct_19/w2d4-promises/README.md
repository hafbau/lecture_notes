Promises with Hafiz
===

Hey crew, thanks for another awesome class today. Hopefully today was as fun for you all as it was for me. Promises are awesome, keep an open mind, be patient and happy with your progress. You will get a lot of practice with promises going forward.

<a href="https://github.com/hafbau/lecture_notes/tree/master/02_14_oct_19/w2d4-promises">Link to code repo here.</a>

### Temparature Check

- feedback on TCP
- self awareness
- last week's test
- tomorrow's test


### Review

- What is asynchronous and why in Node?
- Asynchronous control flow mechanisms in JS that we currently know
- Quick check on what and why a callback?


### Asynchronous Callbacks

Lets review the [Profile Generator](https://web.compass.lighthouselabs.ca/c583c1da-f7c8-478b-81a9-9497579a8ac2) as our first introduction to _callback hell_.


As another example problem, lets read the [Agile manifesto](https://agilemanifesto.org/) from disk, which, for us is broken into four parts / files: p1.txt, p2.txt, p3.txt, and p4.txt.


*Wouldn't it be cool to clean this ~hell~ waterfall up? Ideas?*

We discussed an hypothetical `.then` (or `.next`?) function to deal with callback hell and these are specs we came up with:

  - should take the return value of the current task and pass it to the next one
  - will have to be given (pass in) a function to execute next
  - chainable
  - should be able to catch police
  - should be able to exit finally


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


*Things we did not get to in class*
---
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
    throw error;
  });
```

- What if we want to handle specific errors in a specific way?
  + Come talk to me about this.


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