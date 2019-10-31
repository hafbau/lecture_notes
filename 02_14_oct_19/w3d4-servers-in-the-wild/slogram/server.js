const express = require('express');
const fakeHandler = require("../demo/fakeHandler");
const photoRouter = require("./routes/photos");

const app = express();

app.get('/register', fakeHandler());
app.put("/users", fakeHandler("welcome user"))

app.use('/photos', photoRouter);
// All the below /photos routes now live in `routes/photos.js`
// and the above code replaces all the below after modularizing code.
// app.get('/photos/:photoId', fakeHandler('jhgjygjgh'))
// app.put('/photos/:photoId', fakeHandler('oh woah!'));
// app.delete('/photos/:photoId', fakeHandler('De;leting'))

// app.post('/photos', fakeHandler('Fetching photos'));
// app.get('/photos', (req, res) => {
//   const allphotos = getAll('photos')

//   res.json(allphotos)
// })

app.listen(4337, () => {
  console.log('been 4337ing before it was cool!')
})