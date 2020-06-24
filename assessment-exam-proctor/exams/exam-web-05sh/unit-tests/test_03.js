const chai = require("chai");
const assert = chai.assert;
const fs = require("fs");

const sql = fs.readFileSync("./answers/03.sql", "utf8");

const knex = require("knex")({
  client           : "sqlite3",
  connection       : { filename: "./supporting-files/test.sqlite3" },
  useNullAsDefault : true
});

describe("Query 03", () => {
  after(() => knex.destroy());

  it("retrieves a single column result set", () => {
    return knex.raw(sql).then(result => {
      const first = result[0];
      assert.isObject(first, "No results therefore cannot check columns");

      const keys = Object.keys(first);
      assert.lengthOf(keys, 1);
    });
  });

  it("retrieves a single row (the count)", () => {
    return knex.raw(sql).then(result => {
      assert.lengthOf(result, 1);
    });
  });

  it("retrieves the correct count in that row", () => {
    return knex.raw(sql).then(result => {
      const first = result[0];
      const key = Object.keys(first)[0];
      const count = first[key];

      assert.strictEqual(count, 8);
    });
  });
});
