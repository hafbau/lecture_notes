const chai    = require("chai");
const sinon   = require("sinon");
const assert  = chai.assert;

const mapById = require("../answers/05.js");

describe("mapById", () => {

  it("should return an object with the object ids as keys (Case 1)", () => {
    var map = mapById([{id: 102, name: "Alice"}, {id: 205, name: "Bob"}, {id: 592, name: "Claire"}]);

      assert.deepEqual(map, {
        102: {id: 102, name: "Alice"},
        205: {id: 205, name: "Bob"},
        592: {id: 592, name: "Claire"},
      });
  });


  it("should return an object with the object ids as keys (Case 2)", () => {
    var map = mapById([{id: 5, value: "Five"}, {id: 4, value: "Four"}, {id: 3, value: "Three"}])

      assert.deepEqual(map, {
        5: {id: 5, value: "Five"},
        4: {id: 4, value: "Four"},
        3: {id: 3, value: "Three"},
      });
  });

  it("should return an object with the object ids as keys (Case 3)", () => {
    var map = mapById([{id: "102", name: "Alice"}, {id: "205", name: "Bob"}, {id: "592", name: "Claire"}]);

      assert.deepEqual(map, {
        "102": {id: "102", name: "Alice"},
        "205": {id: "205", name: "Bob"},
        "592": {id: "592", name: "Claire"},
      });
  });


  it("should return an empty object when given an array with no elements", () => {
    var map = mapById([]);
    assert.deepEqual(map, {});
  });


});
