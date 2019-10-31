const express = require("express");
const fakeHandler = require("../../demo/fakeHandler");
const { getAll } = require("../../demo/dataAccessHelpers");
const photoRouter = express.Router();


photoRouter.post('/', fakeHandler('Fetching photos'));
photoRouter.get('/', (req, res) => {
  const allphotos = getAll('photos')
  res.json(allphotos)
})
photoRouter.get('/:photoId', fakeHandler('stuff stuff'))
photoRouter.put('/:photoId', fakeHandler('oh woah!'));
photoRouter.delete('/:photoId', fakeHandler('De;leting'))

module.exports = photoRouter;