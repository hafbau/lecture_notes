const partition = function(arr, callback) {
  const left = [];
  const right = [];

  for (const item of arr) {
    if (callback(item)) {
      left.push(item);
    } else {
      right.push(item);
    }
  }

  return [left, right];
};

// Don't change below:
module.exports = { partition };
