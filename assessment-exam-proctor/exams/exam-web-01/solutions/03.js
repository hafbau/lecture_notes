const mode = function(arr) {
  var frequency = {};

  for(n of arr) {
    frequency[n] = frequency[n] || 0;
    frequency[n] += 1;
  }

  return Number(Object.keys(frequency).sort(function(a, b){ return frequency[b] - frequency[a]; })[0]);
};

module.exports = { mode };
