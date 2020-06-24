const arrayToObject = function(arr) {
  const finalObj = {};

  for (const props of arr) {
    finalObj[props[0]] = props[1];
  }

  return finalObj;
};

/*
// Advanced solution using reduce
const arrayToObject = function(input) {
  return input.reduce(function(obj, keyPair) {
    const [key, value] = keyPair;
    obj[key] = value;
    return obj;
  }, {});
};
*/

module.exports = { arrayToObject };
