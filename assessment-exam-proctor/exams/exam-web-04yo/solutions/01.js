"use strict";

const doShortly = function(callback, delay, data) {
  setTimeout(() => {
    callback(data);
  }, delay);
};


// Don't change below:
module.exports = { doShortly };
