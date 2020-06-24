const chai    = require("chai");
const sinon   = require("sinon");
const assert  = chai.assert;

const sumRange = require("../answers/00.js");

describe("sumRange", () => {

  it("3, 6 --> 18", () => {
    assert.equal(sumRange(3, 6), 18);
  });

  it("1, 1 --> 1", () => {
    assert.equal(sumRange(1, 1), 1);
  });

  it("5, 10 --> 45", () => {
    assert.equal(sumRange(5, 10), 45);
  });

  it("99, 101 --> 300", () => {
    assert.equal(sumRange(99, 101), 300);
  });

});
