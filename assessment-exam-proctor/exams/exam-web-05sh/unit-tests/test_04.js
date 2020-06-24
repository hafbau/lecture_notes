const chai = require("chai");
const assert = chai.assert;
const fs = require("fs");

const sql = fs.readFileSync("./answers/04.sql", "utf8");

const knex = require("knex")({
  client           : "sqlite3",
  connection       : { filename: "./supporting-files/test.sqlite3" },
  useNullAsDefault : true
});

describe("Query 04", () => {
  after(() => knex.destroy());

  it("retrieves the expected columns and in the correct order (id, title, isbn)", () => {
    return knex.raw(sql).then(result => {
      const first = result[0];
      assert.isObject(first, "No results therefore cannot check columns");

      const keys = Object.keys(first);
      assert.deepEqual(keys, ["id", "title", "isbn"]);
    });
  });

  it("retrieves 2 of the 3 books", () => {
    return knex.raw(sql).then(result => {
      assert.lengthOf(result, 2);
    });
  });

  it("retrieves book with id 1", () => {
    return knex.raw(sql).then(result => {
      const record = result.find(r => r.id === 1);
      assert.isObject(record);
    });
  });

  it("retrieves book with id 14", () => {
    return knex.raw(sql).then(result => {
      const record = result.find(r => r.id === 14);
      assert.isObject(record);
    });
  });
});
