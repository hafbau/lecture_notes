const round = function(number) {
  return Math.round(number * 100) / 100;
};

const mean = function(arr) {
  var sum = arr.reduce(function(sum,i) { return sum + i; }, 0);
  return sum/arr.length;
};

const stdev = function(arr) {
  var sqtotal = 0;
  var meanv = mean(arr);
  var dev;

  for(n of arr) {
    dev = meanv - n;
    sqtotal += dev * dev;
  }

  return round(Math.sqrt(sqtotal / arr.length));
};

module.exports = { stdev };
