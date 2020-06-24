"use strict";

/* Question 02

Implement a function "selectActive", which, when given a list of objects, returns a subset of the list by filtering out all inactive items.

For example:

  const list = [
                 { id: 1, active: true },
                 { id: 2, active: false },
                 { id: 3, active: true  },
                 { id: 4, active: false }
               ];

  selectActive(list);

Returns:

  [
    { id: 1, active: true },
    { id: 3, active: false }
  ]

*/

function selectActive(list) {

  /* IMPLEMENT ME */

}

// Your personal test code:

const list = [
  { id: 1, active: true },
  { id: 2, active: false },
  { id: 3, active: true  },
  { id: 4, active: false }
];

console.log(selectActive(list));

// Don't change below:

module.exports = selectActive;
