const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const CharacterCtrl = require('./server-assets/controllers/characterCtrl');
const ComicCtrl = require('./server-assets/controllers/comicCtrl');
mongoose.Promise = require('q').Promise;

let app = express();
const port = process.env.PORT || 8000;

//----------Middleware------------//
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

//----------Connections------------//
app.listen(port, function() {
  console.log('Listening on port:', port);
});

//----------Get Characters------------//
app.get('/api/characters', CharacterCtrl.getAllChars);
app.get('/api/characters/:id', CharacterCtrl.getOneChar);

//----------Get Comics------------//
app.get('/api/comics', ComicCtrl.getAllComics);
app.get('/api/comics/:id', ComicCtrl.getOneComic);
