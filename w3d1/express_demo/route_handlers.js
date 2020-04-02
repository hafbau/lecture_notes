// exports.getLucy = (req, res) => res.end('Its LUCY!!!!!!!!!!!!!!!')
// exports.getCaro = (req, res) => res.end('Its Caro!!!!!!!!!!!!!!!')
// exports.getAdlai = (req, res) => res.end('Its Adlai!!!!!!!!!!!!!!!')

const getLucy = (req, res, next) => {
  console.log('lucy wuz ere');
  req.user = "Hafiz"
  // if (true) {
  //   return res.send('Its LUCY!!!!!!!!!!!!!!!')
  // }
  next();
}

const getCaro = (req, res) => res.send('Its Caro!!!!!!!!!!!!!!!')

const getAdlai = (req, res) => res.send('Its Adlai!!!!!!!!!!!!!!!')

// module.exports = {
//   getLucy: getLucy,
//   getAdlai: getAdlai,
//   getCaro: getCaro,
// }
module.exports = {
  getLucy,
  getAdlai,
  getCaro,
}