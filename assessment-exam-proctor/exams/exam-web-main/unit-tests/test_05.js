const chai    = require("chai");
const sinon   = require("sinon");
const assert  = chai.assert;

const groupBy = require("../answers/05.js");

describe("groupBy", () => {

  it("Sample Case 1 (By Id)", () => {

    var list = [{id: 102, name: "Alice"},
                {id: 205, name: "Bob", title: "Dr."},
                {id: 592, name: "Clyde", age: 32}];

    var target = {
      102: [{id: 102, name: "Alice"}],
      205: [{id: 205, name: "Bob", title: "Dr."}],
      592: [{id: 592, name: "Clyde", age: 32}]
    };

    assert.deepEqual(groupBy(list, function(i) { return i.id; }), target);
  });

  it("Sample Case 2 (By Name Length)", () => {

    var list = [{id: 102, name: "Alice"},
                {id: 205, name: "Bob", title: "Dr."},
                {id: 592, name: "Clyde", age: 32}];

    var target = {
      3: [{id: 205, name: "Bob", title: "Dr."}],
      5: [{id: 102, name: "Alice"},
          {id: 592, name: "Clyde", age: 32}]
    };

    var result = groupBy(list, function(i) { return i.name.length; });

    assert.deepEqual(result, target);
  });

  it("Other Case", () => {

    var list = [{count: 1, title: "Foo"},
                {count: 1, title: "Bar"},
                {count: 2, title: "Baz"}];

    var target = {
      1: [{count: 1, title: "Foo"},
          {count: 1, title: "Bar"}],
      2: [{count: 2, title: "Baz"}]
    };

    var result = groupBy(list, function(i) { return i.count; });

    assert.deepEqual(result, target);
  });


  it("Other Case", () => {

    var list = [{count: 0, title: "Foo"},
                {count: 0, title: "Bar"},
                {count: 0, title: "Baz"}];

    var target = {
      0: [{count: 0, title: "Foo"},
          {count: 0, title: "Bar"},
          {count: 0, title: "Baz"}]
    };

    var result = groupBy(list, function(i) { return i.count; });

    assert.deepEqual(result, target);
  });

  it("Function returns null", () => {

    var list = [{id: 102, name: "Alice"},
                {id: 205, name: "Bob", title: "Dr."},
                {id: 592, name: "Clyde", age: 32}];

    var target = {
      null:  [{id: 102, name: "Alice"},
              {id: 205, name: "Bob", title: "Dr."},
              {id: 592, name: "Clyde", age: 32}]
    };

    var result = groupBy(list, function(i) { return null; });

    assert.deepEqual(result, target);
  });

  it("Empty List", () => {

    var list = [];

    var target = {};
    var result = groupBy(list, function(i) { });

    assert.deepEqual(result, target);
  });

});
