const assert  = require("chai").assert;

const { findFriend } = require("../answers/06");

const inventors = [
  {
    name: "Brendan Eich",
    language: "JavaScript",
    worked_for: "Netscape",
    friends: ["Yukihiro Matsumoto", "Guido van Rossum"]
  },
  {
    name: "Guido van Rossum",
    language: "Python",
    worked_for: "CWI",
    friends: ["Brendan Eich", "Yukihiro Matsumoto"]
  },
  {
    name: "Yukihiro Matsumoto",
    language: "Ruby",
    worked_for: "netlab.jp",
    friends: ["Brendan Eich", "Guido van Rossum"]
  }
];

describe('findFriend', () => {
  it("looks up Brendan's language from Guido's record", () => {
    const result = findFriend(inventors, "Guido van Rossum", "language");

    assert.deepEqual(result, { name: "Brendan Eich", language: "JavaScript" });
  });

  it("looks up Matz' company(worked_for) from Brendan's record", () => {
    const result = findFriend(inventors, "Brendan Eich", "worked_for");

    assert.deepEqual(result, { name: "Yukihiro Matsumoto", worked_for: "netlab.jp" });
  });

  it("returns 'Not found' when looking up an unknown record", () => {
    const result = findFriend(inventors, "Khurram", "language");

    assert.equal(result, "Not found");
  });

  it("returns 'Not found' when an invalid field is requested", () => {
    const result = findFriend(inventors, "Guido van Rossum", "coat_size");

    assert.equal(result, "Not found");
  });
});
