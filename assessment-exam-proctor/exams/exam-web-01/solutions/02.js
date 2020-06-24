const round = function(number) {
  return Math.round(number * 100) / 100;
};

const median = function(arr) {
  var list = arr.sort(function(a, b) { return b - a; });
  var middle;
  if(arr.length % 2 === 0) {
    middle = arr.length / 2;
    return round( (list[middle - 1] + list[middle]) / 2);

  } else {
    middle = Math.floor(arr.length / 2);
    return list[middle];
  }
};

module.exports = { median };
