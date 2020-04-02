const express = require('express')

const {
  getAllShops,
  getShop,
  createShop,
  getNewShopForm
  } = require('./routeHandlers')

const app = express()
app.set('view engine', 'ejs')

const PORT = 8080

// Browse
app.get('/', getAllShops)
app.get('/shops', getAllShops)

// View A shop
app.get('/shops/:shop_id', getShop)

// Add a shop
app.get('/shops/new', getNewShopForm)
app.post('/shops', createShop)

app.listen(PORT, (err) => !err && console.log('Weve bn yeeting b4 it cewl at port', PORT))