declaredFunk();
console.log(declaredFunk);
function declaredFunk() {
  console.log('Im declared');
}

// Not hoisted
expressedFunk(); // TypeError: expressedFunk is not a function

var expressedFunk = function () {
  console.log('Im expressed');
}

// bothFunk();

// var bothFunk = function bothFunk() {
//   console.log('Im both funks');
// }