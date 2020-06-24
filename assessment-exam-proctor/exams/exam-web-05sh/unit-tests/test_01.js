const chai = require("chai");
const assert = chai.assert;
const fs = require("fs");

const sql = fs.readFileSync("./answers/01.sql", "utf8");

const knex = require("knex")({
  client           : "sqlite3",
  connection       : { filename: "./supporting-files/test.sqlite3" },
  useNullAsDefault : true
});

describe("Query 01", () => {
  after(() => knex.destroy());

  it("retrieves the expected columns and in the correct order (id, store_id, title, isbn, stock, price_cents)", () => {
    return knex.raw(sql).then(result => {
      const first = result[0];
      assert.isObject(first, "No results therefore cannot check columns");

      const keys = Object.keys(first);
      assert.deepEqual(keys, ["id", "store_id", "title", "isbn", "stock", "price_cents"]);
    });
  });

  it("retrieves all 10 books", () => {
    return knex.raw(sql).then(result => {
      assert.lengthOf(result, 10);
    });
  });

  it("retrieves the books in the correct order", () => {
    return knex.raw(sql).then(result => {
      const ids = result.map(r => r.id);
      const expected = [40, 4, 3, 44, 1, 10, 12, 2, 14, 16];
      assert.deepEqual(ids, expected);
    });
  });
});
