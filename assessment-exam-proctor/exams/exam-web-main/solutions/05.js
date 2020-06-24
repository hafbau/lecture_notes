function groupBy(arr, cb) {
  var output = {};

  for(el of arr) {
    output[cb(el)] = output[cb(el)] || [];
    output[cb(el)].push(el);
  }

  return output;
}

module.exports = groupBy;
