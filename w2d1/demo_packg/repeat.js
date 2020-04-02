// [[1, 10]]

module.exports = function (arrOfNumAndCount) {
  // return '1111111111'
  // const strToRepeat = arrOfNumAndCount[0][0].toString()
  // const count = arrOfNumAndCount[0][1]

  // return strToRepeat.repeat(count);
  // const result = [];
  // arrOfNumAndCount.forEach((pair) => {
  try {
    return arrOfNumAndCount
      .map((pair) => {
        // Array destructuring
        // const num = pair[0];
        // const count = pair[1];
        const [num, count] = pair;
        const str = num.toString();
        return str.repeat(count);
      })
      .join(', ');
  } catch (error) {
    throw new Error('Baaaadddd')
  }
}