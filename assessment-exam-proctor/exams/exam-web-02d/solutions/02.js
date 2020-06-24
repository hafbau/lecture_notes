const countWhich = function(list, cb) {
  if (!Array.isArray(list)) {
    return false;
  }

  let counter = 0;
  for (const item of list) {
    if (cb(item)) {
      counter++;
    }
  }

  return counter;
};

module.exports = { countWhich };
