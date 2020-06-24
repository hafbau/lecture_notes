const chai    = require("chai");
const sinon   = require("sinon");
const assert  = chai.assert;

const tee = require("../answers/00.js");
let spyConsole;

describe("tee", () => {

  beforeEach(() => {
    spyConsole = sinon.spy(console, "log");
  });
  
  afterEach(() => { spyConsole.restore() });
  
  it("should return the given value (Case 1)", () => {
    assert.equal(tee(5), 5);
  });

  it("should return the given value (Case 2)", () => {
    assert.equal(tee("a"), "a");
  });


  it("should return the given value (Case 3)", () => {
    assert.deepEqual(tee([]), []);
  });


  it("should return the given value (Case 4)", () => {
    assert.equal(tee(null), null);
  });


  it("should console.log the given value (Case 1)", () => {
    tee(5);
    sinon.assert.calledWith(spyConsole, 5);
  });


  it("should console.log the given value (Case 2)", () => {
    tee("a");
    sinon.assert.calledWith(spyConsole, "a");
  });

});
