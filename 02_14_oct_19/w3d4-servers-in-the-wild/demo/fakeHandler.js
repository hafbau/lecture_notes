module.exports = function (msg) {
  return function (req, res) {
    if (msg) {
      res.send(`Drogo says: ${msg} at ${req.method.toUpperCase()} ${req.url}`);
    } else {
      res.send("I'll blow ya mind! 🤯");
    }
  }
}

// Arrow function version, for the curious ;)
// module.exports = msg => (req, res) => {
//   if (msg) {
//     res.send(`Drogo says: ${msg} at ${req.method.toUpperCase()} ${req.url}`);
//   } else {
//     res.send("I'll blow ya mind! 🤯");
//   }
// }