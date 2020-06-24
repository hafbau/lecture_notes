const deepArrayToObject = function(arr) {
  const finalObj = {};

  for (const props of arr) {
    if (Array.isArray(props[1])) {
      finalObj[props[0]] = deepArrayToObject(props[1]);
    } else {
      finalObj[props[0]] = props[1];
    }
  }

  return finalObj;
};

module.exports = { deepArrayToObject };
