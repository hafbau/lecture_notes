const { shops } = require('./db')

exports.getAllShops = (req, res) => {
  res.render('shops', { shops })
}

exports.getShop = (req, res) => {
  console.log('req.params', req.params)
  const shopId = req.params['shop_id'];
  const shop = shops[shopId]

  // if (shop) { // same as below; the below reads better
  if (shopId in shops) {
    res.render('shop_show', { shop })
  } else {
    res.status(404).send('Shop not found')
  }
}

exports.getNewShopForm = (req, res) => {
  res.render("shop_new");
};


exports.createShop = (req, res) => {

};