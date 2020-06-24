function mapById(arr) {
  var map = {};

  for(el of arr) {
    map[el.id] = el;
  }

  return map;
}


module.exports = mapById;
