"use strict";

/* Question 01

Define a function listPeople which is given an array containing objects defining people's names and ages.

Return: a string formatted as a list of names and age groups separated by commas except for the last two names, which should be separated by an ampersand.

The age group is broken down such that:
- For ages under 16 they are considered a 'kid'
- For ages between 16 and 59 (inclusive) they are considered an 'adult'
- For anything higher they are considered a 'senior'

For example:

  listPeople([
    {
      name: 'Bart',
      age : 10
    },
    {
      name: 'Lisa',
      age : 20
    },
    {
      name: 'Maggie',
      age : 62
    }
  ]);

Returns:

  Bart the kid, Lisa the adult & Maggie the senior

*/

function listPeople(people) {

  /* IMPLEMENT ME */

}

// Don't change below:

module.exports = listPeople;
