const chai    = require("chai");
const sinon   = require("sinon");
const assert  = chai.assert;

const lib = require("../answers/01.js");

describe("min", () => {

  it("min([6,1,7,2,8]) === 1", () => {
    assert.equal(lib.min([6,1,7,2,8]), 1);
  });

  it("min([-9,-2,-4]) === -9", () => {
    assert.equal(lib.min([-9,-2,-4]), -9);
  });

  it("min([5]) === 5", () => {
    assert.equal(lib.min([5]), 5);
  });

});

describe("max", () => {

  it("max([5,2,7,100,2]) === 100", () => {
    assert.equal(lib.max([5,2,7,100,2]), 100);
  });

  it("max([-1,-2,-3]) === -1", () => {
    assert.equal(lib.max([-1,-2,-3]), -1);
  });

  it("max([5]) === 5", () => {
    assert.equal(lib.max([5]), 5);
  });

});

describe("range", () => {

  it("range([8,3,1,8,3]) === 7", () => {
    assert.equal(lib.range([8,3,1,8,3]), 7);
  });

  it("range([-5,0,5]) === 10", () => {
    assert.equal(lib.range([-5,0,5]), 10);
  });

});
