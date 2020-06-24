const round = function(number) {
  return Math.round(number * 100) / 100;
};

const count = function(arr) {
  return arr.length;
};

const sum = function(arr) {
  if (!arr || arr.length === 0) {
    return 0
  }
  return arr.reduce(function(memo, i) { return memo + i; });
};

const mean = function(arr) {
  if (!arr || arr.length === 0) {
    return null;
  }
  return round(sum(arr) / count(arr));
};

module.exports = { count, sum, mean };
