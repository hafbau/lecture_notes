function unique(arr) {
  return arr.reduce(function(memo, value){
    if(memo.indexOf(value) === -1) {
      memo.push(value);
    }
    return memo;
  }, []);
}

module.exports = unique;
