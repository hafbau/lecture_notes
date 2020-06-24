const chai = require("chai");
const assert = chai.assert;
const fs = require("fs");

const sql = fs.readFileSync("./answers/08.sql", "utf8");

const knex = require("knex")({
  client           : "sqlite3",
  connection       : { filename: "./supporting-files/test.sqlite3" },
  useNullAsDefault : true
});

describe("Query 08", () => {
  after(() => knex.destroy());

  it("retrieves columns store_name and book_count only", () => {
    return knex.raw(sql).then(result => {
      const first = result[0];
      assert.isObject(first, "No results therefore cannot check columns");

      const keys = Object.keys(first);
      assert.deepEqual(keys, ["store_name", "book_count"]);
    });
  });

  it("retrieves 1 record (due to having only one location with 3 books or more)", () => {
    return knex.raw(sql).then(result => {
      assert.lengthOf(result, 1);
    });
  });

  it("reports Vancouver as having 3 books", () => {
    return knex.raw(sql).then(result => {
      const city = result.find(r => r.store_name === "Vancouver");
      assert.isObject(city);

      assert.strictEqual(city.book_count, 3);
    });
  });
});
