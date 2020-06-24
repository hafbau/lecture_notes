function sumRange(from, to) {
  let sum = 0;
  for(let i = from; i <= to; i++) {
    sum += i;
  }
  return sum;
}

module.exports = sumRange;
