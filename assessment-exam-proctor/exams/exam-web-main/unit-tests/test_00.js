const chai    = require("chai");
const sinon   = require("sinon");
const assert  = chai.assert;

const sumTo = require("../answers/00.js");

describe("sumTo", () => {

  it("5 --> 15", () => {
    assert.equal(sumTo(5), 15);
  });

  it("1 --> 1", () => {
    assert.equal(sumTo(1), 1);
  });

  it("10 --> 55", () => {
    assert.equal(sumTo(10), 55);
  });

  it("100 --> 5050", () => {
    assert.equal(sumTo(100), 5050);
  });

});
