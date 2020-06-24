const chai    = require("chai");
const sinon   = require("sinon");
const assert  = chai.assert;

const unique = require("../answers/02.js");

describe("unique", () => {

  it("return the given array with duplicate removed (Case 1)", () => {
      assert.deepEqual(
          unique([1,5,4,1,4,1,3]),
          [1,5,4,3]
          )
  });

  it("return the given array with duplicate removed (Case 2)", () => {
      assert.deepEqual(
          unique([1,1,1,1,1,1,1]),
          [1]
          )
  });

  it("return the given array with duplicate removed (Case 3)", () => {
      assert.deepEqual(
          unique([1,2,3,"3","3",3]),
          [1,2,3,"3"]
          )
  });

  it("returns an empty array when given an empty array", () => {
      assert.deepEqual(
          unique([]),
          []
          )
  });
});
