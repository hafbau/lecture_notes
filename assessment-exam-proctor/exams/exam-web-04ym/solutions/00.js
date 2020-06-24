"use strict";

/* Question 00

Example Input:

[
  { winner: 'Alishah', loser: 'Bob',    loser_points: 3 },
  { winner: 'Maria',   loser: 'Xu Jin', loser_points: 1 },
  { winner: 'Elise',   loser: 'Bob',    loser_points: 2 },
  { winner: 'Elise',   loser: 'Maria',  loser_points: 4 },
  { winner: 'Alishah', loser: 'Maria',  loser_points: 2 },
  { winner: 'Maria',   loser: 'Xu Jin', loser_points: 3 },
  { winner: 'Xu Jin',  loser: 'Elise',  loser_points: 2 }
]

Expected Result:

['Alishah', 'Bob', 'Maria', 'Xu Jin', 'Elise']

*/


const allPlayerNames = function(outcomes) {
  const names = [];
  const nameCheck = {};
  for (const outcome of outcomes) {
    if (nameCheck[outcome.winner] === undefined) {
      names.push(outcome.winner);
      nameCheck[outcome.winner] = true;
    }
    if (nameCheck[outcome.loser] === undefined) {
      names.push(outcome.loser);
      nameCheck[outcome.loser] = true;
    }
  }
  return names;
};


// Don't change below:
module.exports = { allPlayerNames };
