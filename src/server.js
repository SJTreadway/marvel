const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const key = require('./secret/key');

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
