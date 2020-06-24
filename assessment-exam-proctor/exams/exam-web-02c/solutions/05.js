// Advanced / Clever solution
const titleCaseAdvanced = function(text) {
  return text.split(' ')
    .map(word => word.toLowerCase().split(''))
    .map(word => {
      if (word[0]) {
        word[0] = word[0].toUpperCase();
      }
      return word.join('');
    })
    .join(' ');
};

// Expected student solution
const titleCase = function(text) {
  const words = text.split(' ');
  let result = '';

  for (const word of words) {
    const letters = word.toLowerCase().split('');
    // may be an empty array if text itself is empty string
    if (letters[0]) {
      letters[0] = letters[0].toUpperCase();
    }
    result += letters.join('');
    result += ' ';
  }

  return result.trim();
};

module.exports = { titleCase };
