const min = function(arr) {
  var minv = arr[0];
  for(el of arr) {
    if(el < minv){
      minv = el;
    }
  }
  return minv;
};

const max = function(arr) {
  var maxv = arr[0];
  for(el of arr) {
    if(el > maxv){
      maxv = el;
    }
  }
  return maxv;
};

const range = function(arr) {
  return max(arr) - min(arr);
};

module.exports = { min, max, range };
