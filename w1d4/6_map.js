/**
 * map(inputArray, transformerCallback)
 * return new transformed array
 */
const map = function (inputArr, callback) {
  // Your code here
  const transformedArr = [];
  for(const item of inputArr) {
    const transformedItem = callback(item)
    transformedArr.push(transformedItem)
  }
  return transformedArr;
}


// Test case 1
const input1 = [1, 2, 3];

// ARROW FUNCTION WITH IMPLICIT RETURN
// const squareNum = (num) => num * num

// REGULAR FUNCTION EQUIVALENT OF ABOVE ARROW FUNCTION
// const squareNum = function(num) {
//   return num * num
// }

// ARROW FUNCTION WITH EXPLICIT RETURN
const squareNum = (num) => {
  return num * num
}
console.log(map(input1, squareNum)); // [1, 4, 9]

// Test case 2
const out2 = map(['yo', 'hey', 'wazaaa'], function (str) {
  return str.length
});

console.log('output of test 2 :', out2); // [2, 3, 6]
