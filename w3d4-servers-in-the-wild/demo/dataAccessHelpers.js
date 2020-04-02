const db = require("./db");

exports.getAll = resource => db[resource];
exports.getById = (resource, id) => db[resource].find(record => record.id === id);
exports.add = (resource, data) => {
  const allItemsInResource = db[resource];
  const newID = allItemsInResource[allItemsInResource.length - 1].id + 1;
  data.id = newID
  db[resource].push(data);
  return data;
}

exports.updateById = (resource, id, data) => {
  const allItemsInResource = db[resource];
  const index = allItemsInResource.findIndex(record => record.id === id);
  const modified = {
    ...allItemsInResource[index],
    ...data
  };
  db[resource][index] = modified;
  return modified;
}

exports.deleteById = (resource, id) => {
  const index = db[resource].findIndex(record => record.id === id);
  db[resource].splice(index, 1);
}