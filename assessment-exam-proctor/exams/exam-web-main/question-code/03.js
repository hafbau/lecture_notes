/* Question 03

Implement a function "checkOverlap", which, when given two objects that represent lines, returns whether they overlap or not.

Lines are represented in this way: {start: 0, end: 10}

(end will always be greater than start)


Example 1:

  checkOverlap({start: 0, end: 10}, {start: 8, end: 15})

Which visually, would be:

   0--------10

         8-------15

         ^^^^ overlap

Returns:

  true



Example 2:

  checkOverlap({start: 12, end: 15}, {start: 0, end: 10})

Which visually, would be:

                 12-------15

   0--------10

                  no overlap

Returns:

  false

*/

function checkOverlap(lineA, lineB) {

  /* IMPLEMENT ME */

}

// Don't change below:

module.exports = checkOverlap;
