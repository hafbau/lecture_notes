function intersection(listA, listB) {
  return listA.filter(function(el) {
    return listB.indexOf(el) !== -1;
  });
}

module.exports = intersection;
