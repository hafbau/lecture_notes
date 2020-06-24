function and(a, b) {
  if(a === 1 && b === 1) {
    return 1;
  }
  return 0;
}

function or(a, b) {
  if(a === 0 && b === 0) {
    return 0;
  }
  return 1;
}

function xor(a, b) {
  if( a + b === 1 ) {
    return 1;
  } else {
    return 0;
  }
}

function nor(a, b) {
  if ( a + b === 0 ) {
    return 1;
  }
  return 0;
}

module.exports = {
  and: and,
  or: or,
  xor: xor,
  nor: nor
};
