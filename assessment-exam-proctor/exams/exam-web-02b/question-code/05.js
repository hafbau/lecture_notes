"use strict";

/* Question 05

Implement a function "mapById", which, when given an array of objects, returns an object, where the keys are the ids of the input objects and the values are the corresponding input objects.

For example:

  mapById([{id: 102, name: "Alice"},
           {id: 205, name: "Bob", title: "Dr."},
           {id: 592, name: "Claire", age: 32}]);

Returns:

  {
    102: {id: 102, name: "Alice"},
    205: {id: 205, name: "Bob", title: "Dr."},
    592: {id: 592, name: "Claire", age: 32}
  }

*/

function mapById(arr) {
  /* IMPLEMENT ME */
  return {};
};

// Your personal test code:

var input = [{id: 102, name: "Alice"},
             {id: 205, name: "Bob", title: "Dr."},
             {id: 592, name: "Claire", age: 32}];

var output = {
  102: {id: 102, name: "Alice"},
  205: {id: 205, name: "Bob", title: "Dr."},
  592: {id: 592, name: "Claire", age: 32}
};

console.log(mapById(input));
console.log(mapById(input)[102] === output[102]);
console.log(mapById(input)[205] === output[205]);
console.log(mapById(input)[592] === output[592]);

// Don't change below:

module.exports = mapById;
