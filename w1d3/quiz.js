// get total runtime of these movies
const movies = [{
    Title: "Joker",
    Year: 2019,
    Runtime: "122 min",
    Genre: ["Crime", "Drama", "Thriller"],
    Director: "Todd Phillips",
    Actors: ["Joaquin Phoenix", "Robert De Niro", "Zazie Beetz", "Frances Conroy"],
  },
  {
    Title: "Captain Marvel",
    Year: 2019,
    Runtime: "123 min",
    Genre: ["Action", "Adventure", "Sci-Fi"],
    Director: "Anna Boden",
    Actors: ["Brie Larson", "Samuel L. Jackson", "Ben Mendelsohn", "Jude Law"],
  },

  {
    Title: "John Wick: Chapter 3 - Parabellum",
    Year: 2019,
    Runtime: "131 min",
    Genre: ["Action", "Crime", "Thriller"],
    Director: "Chad Stahelski",
    Actors: ["Keanu Reeves", "Halle Berry", "Ian McShane", "Laurence Fishburne"]
  }
]

// Init totalruntime = 0
// loop through the array
  // lookup 'runTime' in each movie in the array
  // get number from runtime value
  // sum the number val to totalruntime

// return totalruntime

const getTotalRuntime = function(moviesInput) {
  let totalRuntime = 0;

  for (const movie of moviesInput) {
    const runTime = parseFloat(movie['Runtime'])
    totalRuntime += runTime;
  }
  return totalRuntime;
}

console.log(getTotalRuntime(movies));