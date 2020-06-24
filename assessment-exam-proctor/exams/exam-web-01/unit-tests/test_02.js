const chai    = require("chai");
const sinon   = require("sinon");
const assert  = chai.assert;

const lib = require("../answers/02.js");

describe("median", () => {

  it("median([1,2,3]) === 2", () => {
    assert.equal(lib.median([1,2,3]), 2);
  });

  it("median([2,1,3]) === 2", () => {
    assert.equal(lib.median([2,1,3]), 2);
  });

  it("median([1,2,3,4]) === 2.5", () => {
    assert.equal(lib.median([1,2,3,4]), 2.5);
  });

  it("median([3,4,1,2]) === 2.5", () => {
    assert.equal(lib.median([4,3,2,1]), 2.5);
  });

});
