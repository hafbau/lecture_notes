const minmax = function(list) {
  if (list.length) {
    list.sort((a, b) => a > b);
    return [list[0], list[list.length - 1]];
  } else {
    return [undefined, undefined];
  }
};

module.exports = { minmax };
