// get server set up
const express = require('express');
// const ej
const render = require('./indexPage')
const app = express();

// SEtting up ejs with express
app.set('view engine', 'ejs');
// get it (server) listening for request

// app.[method](/url, (request, response) => {})
app.get('/', (req, res) => {
  // res.render(filenameOfTemplateToRender, variablesToBeAvailableForTemplatetoUse)
  return res.render('index')
  res.render('shoes')
  // res.send("Home from express")
})
app.get('/:rand', (req, res) => {
  const allTheShoes = db.get('shoes')
  // [
  //   { imgurl: '', name: ''},
  //   { imgurl: '', name: ''},
  //   { imgurl: '', name: ''},
  //   { imgurl: '', name: ''},
  //   { imgurl: '', name: ''},
  // ]
  res.render('shoeStore', {
    imgUrl: 'https://image.harrods.com/balenciaga-speed-sneakers_14992444_25532160_1000.jpg', shoename: 'Balenciaga',
    shoes: allTheShoes
  })
})

app.listen(3000, () => console.log("Server listening on port", 3000))
// get it to respond to request