const express = require('express')
const bodyParser = require('body-parser')
const methodOv = require('method-override');
const app = express()
const PORT = 3000

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true })) // this gives us req.body
app.use(methodOv('_method'))
const generateRandomID = () => Math.random().toString(16).slice(2, 8);

const createPhotoObj = (photoData) => {
    // 1. generate a unique id
    const id = generateRandomID();
    // 2. add the id to photoData
    photoData.id = id;
    // 3. return photoData
    return photoData;
}

let photosDB = [];
const addPhotoToDB = (data) => {
    photosDB.push(data);
    return data;
}

const getAllPhotosFromDB = () => photosDB;

// RESTFUL ROUTES BELOW
app.delete('/photos/:id', (req, res) => {
    console.log('HEHEHEHEHEH');
    const id = req.params.id;
    photosDB = photosDB.filter(phot => phot.id !== id)
    res.redirect('/photos');
})

app.get('/', (req, res) => {
    res.redirect('/photos')
})
app.get('/photos', (req, res) => {
    const photos = getAllPhotosFromDB();
    console.log('photosDB :>> ', photosDB);
    res.render('photos', { photos: photos })
})

// create new
app.get('/photos/new', (req, res) => {
    res.render('new_photo');
})



app.post('/photos', (req, res) => {
    //1. extract data from form
    const data = req.body;
    console.log('data :>> ', data);
    // 2. use the data to create a photo obj
    const createdPhoto = createPhotoObj(data);
    // 3. store that obj in my photos db
    addPhotoToDB(createdPhoto);
    // 4. redirect to all photos page
    res.redirect('/photos');
})

const getPhotoById = (id) => {
    return photosDB.find(photo => photo.id === id);
}
app.get('/photos/:id', (req, res) => {
    const id = req.params.id;
    const photo = getPhotoById(id);
    res.render('one_photo', { photo: photo });
})


// edit phot
app.get('/photos/:id/edit', (req, res) => {
    res.send('Edit photo form')
})
// idempotent
app.put('/photos/:id', (req, res) => {
    res.send('PuT photo to server')
})

app.delete('/photos/:id', (req, res) => {
    res.send('Delete photo to server')
})


app.listen(PORT, '0.0.0.0', () => {
    console.log(`Listening on ${PORT}`)
})