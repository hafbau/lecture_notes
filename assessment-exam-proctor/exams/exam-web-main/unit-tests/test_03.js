const chai    = require("chai");
const sinon   = require("sinon");
const assert  = chai.assert;

const checkOverlap = require("../answers/03.js");

describe("checkOverlap", () => {

  describe("overlapping", () => {

    it("Sample 1", () => {
      var lineA = {start: 0, end: 10};
      var lineB = {start: 8, end: 15};
      assert.equal(checkOverlap(lineA, lineB), true);
    });

    it("Sample 1 (Reversed)", () => {
      var lineA = {start: 8, end: 15};
      var lineB = {start: 0, end: 10};
      assert.equal(checkOverlap(lineA, lineB), true);
    });

    it("One Inside the Other", () => {
      var lineA = {start: 0, end: 10};
      var lineB = {start: 3, end: 9};
      assert.equal(checkOverlap(lineA, lineB), true);
    });

    it("One Inside the Other (Reversed)", () => {
      var lineA = {start: 3, end: 9};
      var lineB = {start: 0, end: 10};
      assert.equal(checkOverlap(lineA, lineB), true);
    });

    it("Identical", () => {
      var lineA = {start: -10, end: 10};
      var lineB = {start: -10, end: 10};
      assert.equal(checkOverlap(lineA, lineB), true);
    });

  });

  describe("not overlapping", () => {

    it("Sample 2", () => {
      var lineA = {start: 12, end: 15};
      var lineB = {start: 0, end: 10};
      assert.equal(checkOverlap(lineA, lineB), false);
    });

    it("Sample 2 (Reversed)", () => {
      var lineA = {start: 0, end: 10};
      var lineB = {start: 12, end: 15};
      assert.equal(checkOverlap(lineA, lineB), false);
    });

    it("Ends Touching", () => {
      var lineA = {start: 0, end: 10};
      var lineB = {start: 10, end: 20};
      assert.equal(checkOverlap(lineA, lineB), false);
    });

    it("Ends Touching (Reversed)", () => {
      var lineA = {start: 10, end: 20};
      var lineB = {start: 0, end: 10};
      assert.equal(checkOverlap(lineA, lineB), false);
    });

    it("Far Away", () => {
      var lineA = {start: 0, end: 10};
      var lineB = {start: 100, end: 200};
      assert.equal(checkOverlap(lineA, lineB), false);
    });

    it("Far Away (Reversed)", () => {
      var lineA = {start: 100, end: 200};
      var lineB = {start: 0, end: 10};
      assert.equal(checkOverlap(lineA, lineB), false);
    });

  });

});
