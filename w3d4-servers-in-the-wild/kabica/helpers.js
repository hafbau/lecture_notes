// ============================== FUNCTIONS ================================= //

function generateRandomString() {
  let chars = "123456789abcdefghiklmnopqrstuvwxyz";
  let string_length = 6;
  let randomstring = '';
  for (let i = 0; i < string_length; i++) {
    var rnum = Math.floor(Math.random() * chars.length);
    randomstring += chars.substring(rnum, rnum + 1);
  }
  return randomstring;
};
const getKey = function (obj, email) {
  let result = '';
  for (const x in obj) {
    if (obj[x]['email'] === email) {
      result = obj[x]['id'];
      return result;
    }
  }
  return 0;
};
const checkEmail = function (object, email) {
  let result = 1;
  Object.keys(object).forEach(val => {
    if (object[val]['email'] === email) {
      result = 0;
      return result;
    }
  });

  return result;
};
const checkPW = function (object, pw) {
  let result = 0;
  Object.keys(object).forEach(val => {
    if (object[val]['password'] === pw) {
      result = 1;
      return result;
    }
  });

  return result;
};
const getEmail = function (object, email) {
  let result = '';
  Object.keys(object).forEach(val => {
    if (object[val]['email'] === email) {
      result = val;
      return result;
    }
  });

  return result;
};
const urlsForUser = function (id) {
  let result = [];
  Object.keys(urlDatabase).forEach(key => {
    if (urlDatabase[key]['userID'] === id) {
      let urls = {}
      urls['shortURL'] = key;
      urls['longURL'] = urlDatabase[key]['longURL'];
      result.push(urls);
    }
  })
  return result;
};
const getURLKey = function (object, id) {
  let urlKey = '';
  Object.keys(urlDatabase).forEach(key => {
    if (urlDatabase[key]['userID'] === id) {
      urlKey = key;
      return key;
    }
  })
  return urlKey;
}
const getPW = function (email) {
  for (const key of Object.keys(users)) {
    if (users[key]['email'] === email) {
      return result = users[key]['password'];
    }
  }
};