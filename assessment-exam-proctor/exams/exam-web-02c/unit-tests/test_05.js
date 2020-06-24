const assert  = require("chai").assert;

const { titleCase } = require("../answers/05");

describe('titleCase', () => {
  it("AB => Ab", () => {
    let result = titleCase("AB");

    assert.equal(result, "Ab");
  });

  it("HI YO => Hi Yo", () => {
    let result = titleCase("HI YO");

    assert.equal(result, "Hi Yo");
  });

  it("hAndlE wEIrd vOwEl cAsE => Handle Weird Vowel Case", () => {
    let result = titleCase("hAndlE wEIrd vOwEl cAsE");

    assert.equal(result, "Handle Weird Vowel Case");
  });

  it("ALL UPPER CASE WORDS => All Upper Case Words", () => {
    let result = titleCase("ALL UPPER CASE WORDS");

    assert.equal(result, "All Upper Case Words");
  });

  it("all lower case words => All Lower Case Words", () => {
    let result = titleCase("all lower case words");

    assert.equal(result, "All Lower Case Words");
  });

  it("can handle single letter words too! (i r cool => I R COOL)", () => {
    let result = titleCase("i r cool");

    assert.equal(result, "I R Cool");
  });

  it("empty string => empty string", () => {
    let result = titleCase("");

    assert.equal(result, "");
  });

});
