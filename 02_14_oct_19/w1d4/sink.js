// function (wat) {
//   return wat ? 77 : 789
// }

// declaredFunk();
// console.log('declaration', declaredFunk);
declaredFunk = function declaredFunk() {
  console.log('Im declared');
}

console.log('expressed', expressedFunk)
// Not hoisted
// expressedFunk(); // TypeError: expressedFunk is not a function

var expressedFunk = function () {
  console.log('Im expressed');
}