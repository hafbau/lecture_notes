const createDanielPage = require('../http_demo/daniel')

module.exports = {
  getHome: (request, response) => {
    console.log('request.user :>> ', request.user);
    response.render('index')
  },

  getDaniel: (request, response) => {
    response.send(createDanielPage())
  }
}