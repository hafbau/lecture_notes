// Higher order function
const forEach = function (items, action) {
  for (const item of items) {
    action(items, item);
  }
}

const numbers = [1, 2, 3]

const logSquare = (number) => console.log(number * number);
// const lSq = function(num) {
//   return console.log(num * num);
// }

// forEach(numbers, console.log); // 1, [1, 2, 3], 2, [1, 2,3], 3, [1, 2, 3]
forEach(numbers, logSquare); // 1, 4, 9