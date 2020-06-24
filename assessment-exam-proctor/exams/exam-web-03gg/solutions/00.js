const objectToArray = function(obj) {
  const finalArray = [];
  for (const key of Object.keys(obj)) {
    finalArray.push([key, obj[key]]);
  }
  return finalArray;
};

module.exports = { objectToArray };
