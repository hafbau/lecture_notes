const {
  findShops,
  addShop,
  addUser,
  findUserByEmail,
  findUser
} = require('./db')

exports.getAllShops = (req, res) => {
  const userId = req.session.userId;
  const user = findUser(userId);
  res.render('shops', { shops: findShops(), user })
}

exports.getShop = (req, res) => {
  const shopId = req.params['shop_id'];
  const shop = findShops(shopId);
  if (shop) {
    res.render('shop_show', { shop })
  } else {
    res.status(404).send('Shop not found')
  }
}

exports.getNewShopForm = (req, res) => {
  res.render("shop_new");
};

// Can you refactor this?
exports.createShop = (req, res) => {
  const { name, photo, location, description } = req.body;
  // fail if no name || photo
  const shopData = {
    name, photo, location, description
  }
  const newShop = addShop(shopData);
  res.redirect('/shops')
};

exports.postRegister = (req, res) => {
  const {
    email,
    password
  } = req.body;

  if (email && password) {
    const existingUser = findUserByEmail(email);

    if (existingUser) {
      res.status(400).send('You already have an account here, login instead?')
    } else {
      const createdUser = addUser(req.body);

      // req.cookie('userId', createdUser.id);
      req.session.userId = createdUser.id
      res.redirect('/');
    }
  } else {
    res.status(400).send('Email and Password are required!')
  }
}