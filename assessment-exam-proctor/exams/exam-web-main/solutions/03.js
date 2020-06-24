function checkOverlap(lineA, lineB) {
  return !(lineB.start >= lineA.end   ||
           lineB.end   <= lineA.start ||
           lineA.start >= lineB.end   ||
           lineA.end   <= lineB.start);
}

module.exports = checkOverlap;
