const range = function(count, skipZero, descending) {
  if (typeof count === "string") {
    return [];
  }

  let startNum;

  if (descending) {
    startNum = skipZero ? Number(count) : Number(count) - 1;
  } else {
    startNum = skipZero ? 1 : 0;
  }

  const results = [];

  while (results.length < Number(count)) {
    if (descending) {
      results.push(startNum--);
    } else {
      results.push(startNum++);
    }
  }

  return results;
};

module.exports = { range };
