function selectActive(list) {
  return list.select(function(el) {
    if(el.active) {
      return true;
    }
  });
}

module.exports = selectActive;
