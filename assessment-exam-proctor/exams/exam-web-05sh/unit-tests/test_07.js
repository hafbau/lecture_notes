const chai = require("chai");
const assert = chai.assert;
const fs = require("fs");

const sql = fs.readFileSync("./answers/07.sql", "utf8");

const knex = require("knex")({
  client           : "sqlite3",
  connection       : { filename: "./supporting-files/test.sqlite3" },
  useNullAsDefault : true
});

describe("Query 07", () => {
  after(() => knex.destroy());

  it("retrieves columns store_name and book_count only", () => {
    return knex.raw(sql).then(result => {
      const first = result[0];
      assert.isObject(first, "No results therefore cannot check columns");

      const keys = Object.keys(first);
      assert.deepEqual(keys, ["store_name", "book_count"]);
    });
  });

  it("retrieves 3 records (due to having only three total locations)", () => {
    return knex.raw(sql).then(result => {
      assert.lengthOf(result, 3);
    });
  });

  it("reports Vancouver as having 3 books", () => {
    return knex.raw(sql).then(result => {
      const city = result.find(r => r.store_name === "Vancouver");
      assert.isObject(city);

      assert.strictEqual(city.book_count, 3);
    });
  });

  it("reports Toronto as having 2 books", () => {
    return knex.raw(sql).then(result => {
      const city = result.find(r => r.store_name === "Toronto");
      assert.isObject(city);

      assert.strictEqual(city.book_count, 2);
    });
  });

  it("reports Montreal as having 2 books", () => {
    return knex.raw(sql).then(result => {
      const city = result.find(r => r.store_name === "Montreal");
      assert.isObject(city);

      assert.strictEqual(city.book_count, 2);
    });
  });
});
