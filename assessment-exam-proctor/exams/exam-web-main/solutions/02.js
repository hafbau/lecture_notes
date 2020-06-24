function markActive(list, id) {
  return list.map(function(el) {
    if(el.id === id) {
      el.active = true;
    } else {
      el.active = false;
    }
    return el;
  });
}

module.exports = markActive;
