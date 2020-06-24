const chai = require("chai");
const assert = chai.assert;
const fs = require("fs");

const sql = fs.readFileSync("./answers/05.sql", "utf8");

const knex = require("knex")({
  client           : "sqlite3",
  connection       : { filename: "./supporting-files/test.sqlite3" },
  useNullAsDefault : true
});

describe("Query 05", () => {
  after(() => knex.destroy());

  it("retrieves the book id, isbn and store name columns only (id, isbn, name)", () => {
    return knex.raw(sql).then(result => {
      const first = result[0];
      assert.isObject(first, "No results therefore cannot check columns");

      const keys = Object.keys(first);
      assert.deepEqual(keys, ["id", "isbn", "name"]);
    });
  });

  it("retrieves 7 books (only those assigned to a store)", () => {
    return knex.raw(sql).then(result => {
      assert.lengthOf(result, 7);
    });
  });

  it("retrieves, for example, book 1", () => {
    return knex.raw(sql).then(result => {
      const record = result.find(r => r.id === 1);
      assert.isObject(record, "book 1 should be in the resultset");

      const isbn = record.isbn;
      const storeName = record.name;

      assert.strictEqual(isbn, "0345540115");
      assert.strictEqual(storeName, "Vancouver");
    });
  });

  it("includes, for example, book 3, even though it's out of stock", () => {
    return knex.raw(sql).then(result => {
      const record = result.find(r => r.id === 3);
      assert.isObject(record, "book 3 should be in the resultset, despite being out of stock");

      const isbn = record.isbn;
      const storeName = record.name;

      assert.strictEqual(isbn, "0205028802");
      assert.strictEqual(storeName, "Vancouver");
    });
  });

  it("excludes, for example, book 2, since it is not assigned to a store", () => {
    return knex.raw(sql).then(result => {
      const record = result.find(r => r.id === 2);
      assert.isUndefined(record, "book 2 was not supposed to be in the resultset");
    });
  });
});
