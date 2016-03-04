const request = require('request');
const key = require('../../secret/key');
const md5 = require('md5');

let n = Math.random();
let hash = md5(n + key.private + key.public);

module.exports = {
  getChars: function(req,res) {
    let query = '';
    if (req.query.name) {
      query = '?name=' + req.query.name + '&';
    } else {
      query = '?limit=64&';
    }
    request.get('http://gateway.marvel.com:80/v1/public/characters' + query + 'ts=' + n + '&apikey=' + key.public + '&hash=' + hash, function(err, response, body) {
      return res.send(body);
    });
  }

};
