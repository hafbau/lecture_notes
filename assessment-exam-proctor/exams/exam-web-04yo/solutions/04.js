"use strict";

const doShortlyExpectingTruthy = function(callback, delay, data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = callback(data);
      if (result) {
        resolve(result);
      } else {
        reject("Falsy value retrieved");
      }
    }, delay);
  });
};

// Don't change below:
module.exports = { doShortlyExpectingTruthy };

