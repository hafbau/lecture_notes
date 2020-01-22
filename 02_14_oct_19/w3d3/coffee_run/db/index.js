const shops = require('./shops')
const users = require('./users')
const uuid = require('uuid/v4')

const generateRandomID = () => {
  return uuid();
}

exports.findShops = (id) => {
  return id ? shops[id] : shops;
}

exports.addShop = (shopData) => {
  const newId = generateRandomID();
  shopData.id = newId;
  shopData.rating = 0;
  // store the shop in our shops data
  shops[newId] = shopData;
  return shopData;
}

exports.removeShop = (shopId) => delete shops[shopId]

exports.updateShop = (shopData) => {
  shops[shopData.id] = shopData
}

// Think through how we might reuse addShop's logic
exports.addUser = (userData) => {
  const newId = generateRandomID();
  userData.id = newId;
  users[newId] = userData;

  console.log('users :', users);
  return userData;
}

exports.findUserByEmail = (email) => {
  for (const user of Object.values(users)) {
    if (user.email === email) {
      return user;
    }
    // continue
    // console.log('watevs')
  }
}

exports.findUser = (id) => users[id]