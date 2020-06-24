/* Question 2

Implement a function `unique`, which, when given an array of values, returns an array where all duplicates (and triplicates, etc.) have been removed.

For example:

unique([1,5,4,1,4,1,3]);

Returns:

[1,5,4,3]

*/

function unique(arr) {
  return [];
}

// Your personal test code:

var input = [1,5,4,1,4,1,3];

console.log(unique(input));
console.log(unique(input)[0] === 1);
console.log(unique(input)[1] === 5);
console.log(unique(input)[2] === 4);
console.log(unique(input)[3] === 3);

// Don't change below:

module.exports = unique;
