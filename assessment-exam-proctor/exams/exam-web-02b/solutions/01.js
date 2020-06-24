
function ageCategoryOf(person) {
  if (person.age < 16)
    return "kid";
  else if (person.age >= 16 && person.age < 60)
    return "adult";
  else
    return "senior";
}

function join(words) {
  let result = '';
  words.forEach((word, i) => {
    if (i === words.length - 1) {
      result += ' & ';
    } else if (i > 0) {
      result += ', ';
    }
    result += word;
  });
  return result;
}

function listPeople(people) {
  return join(people.map((person) => {
    return `${person.name} the ${ageCategoryOf(person)}`;
  }));
}

// Don't change below:

module.exports = listPeople;
