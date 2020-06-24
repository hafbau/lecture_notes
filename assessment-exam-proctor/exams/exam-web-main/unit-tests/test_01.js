const chai    = require("chai");
const sinon   = require("sinon");
const assert  = chai.assert;

const logic = require("../answers/01.js");

describe("logic", () => {

  describe("and", () => {

    it("0 0 -> 0", () => { assert.equal(logic.and(0, 0), 0); });
    it("1 0 -> 0", () => { assert.equal(logic.and(1, 0), 0); });
    it("0 1 -> 0", () => { assert.equal(logic.and(0, 1), 0); });
    it("1 1 -> 1", () => { assert.equal(logic.and(1, 1), 1); });

  });

  describe("or", () => {

    it("0 0 -> 0", () => { assert.equal(logic.or(0, 0), 0); });
    it("1 0 -> 1", () => { assert.equal(logic.or(1, 0), 1); });
    it("0 1 -> 1", () => { assert.equal(logic.or(0, 1), 1); });
    it("1 1 -> 1", () => { assert.equal(logic.or(1, 1), 1); });

  });

  describe("xor", () => {

    it("0 0 -> 0", () => { assert.equal(logic.xor(0, 0), 0); });
    it("1 0 -> 1", () => { assert.equal(logic.xor(1, 0), 1); });
    it("0 1 -> 1", () => { assert.equal(logic.xor(0, 1), 1); });
    it("1 1 -> 0", () => { assert.equal(logic.xor(1, 1), 0); });

  });


  describe("nor", () => {

    it("0 0 -> 1", () => { assert.equal(logic.nor(0, 0), 1); });
    it("1 0 -> 0", () => { assert.equal(logic.nor(1, 0), 0); });
    it("0 1 -> 0", () => { assert.equal(logic.nor(0, 1), 0); });
    it("1 1 -> 0", () => { assert.equal(logic.nor(1, 1), 0); });

  });

});
