// console.log('Starts funk', myExpressedFunk);

// myExpressedFunk()

// const myExpressedFunk = function() {
//   console.log('Rance is herre');
// }

const items = [1, 2, 3];
// for (const item of items) {
//   console.log(item);
// };

// const logEach = (items) => {
//   for (const item of items) {
//     console.log(item);
//   };
// }

// const logSquareEach = (items) => {
//   for (const item of items) {
//     console.log(item * item);
//   };
// }

// HIGHER ORDER FUNCTION
const forEach = (items, action) => {
  for (const item of items) {
    action(item);
    console.log('item in HOF', item)
  };
}

// const logProductTen = (num, secondArg) => console.log(num * 10, secondArg);

// forEach(items, logProductTen)

// const rating = 10
// theaFunk(rating)

forEach(items, (num) => {
  // item = 30;
  console.log(num * 10)
})

// A difference between arrow function and regular function with the 'function' keyword
// const al = {
//   name: 'Andy',
//   greet: function() {
//     console.log(this.name);
//   }
// }

// al.greet(); // prints Andy

// Arrow function
// const al = {
//   name: 'Andy',
//   greet: () => {
//     console.log(this.name);
//   }
// }

// al.greet(); // prints undefined