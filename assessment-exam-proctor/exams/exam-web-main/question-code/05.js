/* Question 06

Implement a function "groupBy", which, when given an array of objects and a function, returns an object where the input objects are keyed by the result of calling the fn on each of them.

For example:

  var list = [{id: "102", name: "Alice"},
              {id: "205", name: "Bob", title: "Dr."},
              {id: "592", name: "Clyde", age: 32}];

  groupBy(list, function(i) { return i.id; });

Returns:

  {
    "102": [{id: "102", name: "Alice"}],
    "205": [{id: "205", name: "Bob", title: "Dr."}],
    "592": [{id: "592", name: "Clyde", age: 32}]
  }

Example 2:

  groupBy(list, function(i) { return i.name.length; });

Returns:

  {
    "3": [{id: "205", name: "Bob", title: "Dr."}],
    "5": [{id: "102", name: "Alice"},
          {id: "592", name: "Clyde", age: 32}]
  }

*/

function groupBy(arr, cb) {

  /* IMPLEMENT ME */

}

// Don't change below:

module.exports = groupBy;
