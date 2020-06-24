const chai    = require("chai");
const sinon   = require("sinon");
const assert  = chai.assert;

const intersection = require("../answers/04.js");

describe("intersection", () => {

  it("[1,4,3,2] ∩ [3,4,5] == [3,4]", () => {
    assert.sameMembers(intersection([1,4,3,2],[3,4,5]), [3,4]);
  });

  it("[1,4,3,2] ∩ [1,2,3,4] == [1,2,3,4]", () => {
    assert.sameMembers(intersection([1,4,3,2],[1,2,3,4]), [1,2,3,4]);
  });


  it("[1,4,3,2] ∩ [3,5] == [3]", () => {
    assert.sameMembers(intersection([1,4,3,2],[3,5]), [3]);
  });


  it("[4,3,2,1] ∩ [9,8,7,6] == []", () => {
    assert.sameMembers(intersection([4,3,2,1],[9,8,7,6]), []);
  });


  it("[2] ∩ [1,2,3,4] == [2]", () => {
    assert.sameMembers(intersection([2],[1,2,3,4]), [2]);
  });

  it("[1,4,3,2] ∩ [] == []", () => {
    assert.sameMembers(intersection([1,4,3,2],[]), []);
  });


  it("[] ∩ [3,4,5] == []", () => {
    assert.sameMembers(intersection([],[3,4,5]), []);
  });


  it("[] ∩ [] == []", () => {
    assert.sameMembers(intersection([],[]), []);
  });

});
