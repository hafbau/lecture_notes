const chai    = require("chai");
const sinon   = require("sinon");
const assert  = chai.assert;

const selectActive = require("../answers/02.js");

describe("selectActive", () => {

  it("Case 1 (Given Sample)", () => {
    var list = [
             { id: 1, active: true  },
             { id: 2, active: false },
             { id: 3, active: true  },
             { id: 4, active: false }
           ];
    var newList = selectActive(list);
    var targetList = [
             { id: 1, active: true },
             { id: 3, active: true }
           ];
    assert.deepEqual(newList, targetList);
  });

  it("Case 2 (initials instead of IDs)", () => {
    var list = [
             { initials: "KV", active: true  },
             { initials: "DB", active: false },
             { initials: "FA", active: true  },
             { initials: "PJ", active: true  }
           ];
    var newList = selectActive(list);
    var targetList = [
             { initials: "KV", active: true },
             { initials: "FA", active: true },
             { initials: "PJ", active: true }
           ];
    assert.deepEqual(newList, targetList);
  });

  it("Case 3 (None active results in empty result set)", () => {
    var list = [
             { active: false },
             { active: false },
             { active: false },
             { active: false }
           ];
    var newList = selectActive(list);
    var targetList = [];
    assert.deepEqual(newList, targetList);
  });

});
