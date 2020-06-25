// Function as values
const greet = function(name) {
  return 'Hello ' + name;
}

const surrogateFunk = greet

console.log(surrogateFunk('Graham'))

// console.log('greet :>> ', greet);
// console.log('greet() :>> ', greet());

// first class citizens in JS
// const bs = if (true) console.log('not work')