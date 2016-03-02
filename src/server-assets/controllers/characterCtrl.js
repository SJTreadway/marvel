const mongoose = require('mongoose');
const request = require('request');
const key = require('../../secret/key');
const md5 = require('md5');

let n = Math.random();
let hash = md5(n + key.private + key.public);

module.exports = {
  getAllChars: function(req,res) {
    request.get('http://gateway.marvel.com:80/v1/public/characters?&ts=' + n + '&apikey=' + key.public + '&hash=' + hash, function(err, response, body) {
      return res.send(body);
    });
  },
  getOneChar: function(req, res) {
    request.get('http://gateway.marvel.com:80/v1/public/characters/' + req.params.id + '?&ts=' + n + '&apikey=' + key.public + '&hash=' + hash, function(err, response, body) {
      return res.send(body);
    });
  }
};
