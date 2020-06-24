const round = function(value) {
  return Math.round(value * 100) / 100;
};

const filesize = function(bits) {
  const levels = ["", "k", "M", "G", "T", "P"];
  let count = bits;
  let currentLevel = 0;
  while (count >= 1000) {
    count = count / 1000;
    currentLevel += 1;
  }

  return `${round(count)}${levels[currentLevel]}B`;
};

module.exports = { filesize };
