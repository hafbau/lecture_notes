const chai    = require("chai");
const sinon   = require("sinon");
const assert  = chai.assert;

const markActive = require("../answers/02.js");

describe("markActive", () => {

  it("Case 1 (Given Sample)", () => {
    var list = [
             { id: 1, active: false },
             { id: 2, active: false },
             { id: 3, active: true  },
             { id: 4, active: false }
           ];
    var newList = markActive(list, 2);
    var targetList = [
             { id: 1, active: false },
             { id: 2, active: true },
             { id: 3, active: false  },
             { id: 4, active: false }
           ];
    assert.deepEqual(newList, targetList);
  });

  it("Case 2 (String IDs)", () => {
    var list = [
             { id: "1", active: false },
             { id: "2", active: false },
             { id: "3", active: true  },
             { id: "4", active: false }
           ];
    var newList = markActive(list, "2");
    var targetList = [
             { id: "1", active: false },
             { id: "2", active: true },
             { id: "3", active: false  },
             { id: "4", active: false }
           ];
    assert.deepEqual(newList, targetList);
  });

});
