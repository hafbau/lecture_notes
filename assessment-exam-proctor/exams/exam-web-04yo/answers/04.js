"use strict";

/* Question 04

Write a function which creates and returns a promise.

Its job will be similar to that of Question 01:
> Run a given (callback) function after a delay.

However:
- if the given callback returns a falsy value, the promise should fail (reject)
  the string "Falsy value retrieved" should be sent through to the reject function
- if the given callback returns a truthy value, the promise should pass (resolve)
  the return value of the executed callback should be sent through to the resolve function

*/

// setTimeout(funktion, delay)

const doShortlyExpectingTruthy = function(callback, delay, data) {
  // IMPLEMENT ME
  const promiseOne = new Promise(function(resolve, reject) {
    setTimeout(() => {
      const retValue = callback(data);
      if(retValue) {
        // resolve
        resolve(retValue)
      } else {
        // reject
        reject("Falsy value retrieved")
      }

    }, delay)
    
  })
  return promiseOne;
};

// Don't change below:
module.exports = { doShortlyExpectingTruthy };

