const express = require('express')
const bodyParser = require('body-parser')
// const cookieParser = require('cookie-parser')
const cookieSession = require('cookie-session')

const {
  getAllShops,
  getShop,
  createShop,
  getNewShopForm,
  postRegister
  } = require('./routeHandlers')

const PORT = 8080
const app = express()
app.set('view engine', 'ejs')

// review this
app.use(bodyParser.urlencoded({ extended: true }))
// app.use(cookieParser())
app.use(cookieSession({
  name: "session",
  keys: ['mysupersecretkeythatshouldnotbehereinplainsight,ifIamarealdeveloper!']
}))

app.get('/register', (req, res) => {
  // Could check if user is already logged in?
  if(req.session.userId) {
    res.redirect('/')
  } else {
    res.render('register', { user: null })
  }
})
app.post('/register', postRegister)

// Browse
app.get('/', getAllShops)
app.get('/shops', getAllShops)

// Add a shop
app.get('/shops/new', getNewShopForm)
app.post('/shops', createShop)

// View A shop
// Order matters: dynamic routes below static routes
app.get('/shops/:shop_id', getShop)


app.listen(PORT, (err) => !err && console.log('Weve bn yeeting b4 it was cewl at port', PORT))