const tempConverter = function(value, CtoF) {
  if (typeof value !== 'number') {
    return NaN;
  }
  let result = (CtoF) ? (value * 1.8) + 32 : (value - 32) / 1.8;
  return Number(result.toFixed(1));
};

module.exports = { tempConverter };
