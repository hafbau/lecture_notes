const chai    = require("chai");
const sinon   = require("sinon");
const assert  = chai.assert;

const listPeople = require("../answers/01.js");

describe("listPeople", () => {

  it("Sandy (1), Jake (30) -> Sandy the kid & Jake the adult", () => {
    assert.equal(listPeople([
      { name: 'Sandy', age: 1 },
      { name: 'Jake',  age: 30 },
    ]), 'Sandy the kid & Jake the adult');
  });

  it("Marty (15), Ash (60), Jane (16) -> Marty the kid, Ash the senior & Jane the adult", () => {
    assert.equal(listPeople([
      { name: 'Marty', age: 15 },
      { name: 'Ash',   age: 60 },
      { name: 'Jane',  age: 16 }
    ]), 'Marty the kid, Ash the senior & Jane the adult');
  });

  it("Billy (10) -> Billy the kid", () => {
    assert.equal(listPeople([
      { name: 'Billy', age: 10 }
    ]), 'Billy the kid');
  });

});
