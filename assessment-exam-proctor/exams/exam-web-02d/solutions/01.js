const keyMatcher = function(firstObj, secondObj, key) {
  //return (firstObj[key] && secondObj[key]) && (firstObj[key] === secondObj[key]);
  if (firstObj[key] && secondObj[key]) {
    return firstObj[key] === secondObj[key];
  } else {
    return false;
  }
};

module.exports = { keyMatcher };
