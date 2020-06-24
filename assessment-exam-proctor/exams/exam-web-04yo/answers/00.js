"use strict";

/* Question 00

Given a collection of game outcome records, determine who all the players are by returning an array of their names.

The array should be ordered by how the names are encountered.

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
  // IMPLEMENT ME
  // initialize a playerNames array
  const playerNames = []
  // loop through the outcomes array
  for (const outcome of outcomes) {
    // get the k-v of the outcome object

    // check if name exists in playerNames
    // and push into the playerNames array
    if (!playerNames.includes(outcome.winner)) {
      playerNames.push(outcome.winner)
    }
    if (!playerNames.includes(outcome.loser)) {
      playerNames.push(outcome.loser)
    }
  }
  return playerNames;
};

// Don't change below:
module.exports = { allPlayerNames };
