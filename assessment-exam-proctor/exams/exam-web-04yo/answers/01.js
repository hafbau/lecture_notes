"use strict";

/* Question 01

Implement a function which can run a given function after a delay.

Arguments:
 - callback: the function to execute after the delay
 - delay: number of milliseconds to wait
 - data: the one (and only) argument to pass to the callback
*/


const doShortly = function(callback, delay, data) {
  // IMPLEMENT ME
  // const valu = callback(data)// 4
  // setTimeout(callback(data), delay)
  // setTimeout(4, delay)

  const functionToCallBySetTimeout = () => callback(data)
  setTimeout(functionToCallBySetTimeout, delay)

  // setTimeout(callback, delay, data)
};


// Don't change below:
module.exports = { doShortly };
