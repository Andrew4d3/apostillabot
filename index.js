var express = require('express');
var request = require('request');
var path = require('path');
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
var app = express();

const mppreURL = 'https://citaslegalizaciones.mppre.gob.ve';
const urlOptions = { strictSSL: false };


app.use('/botmppre', express.static(__dirname + '/public'));

app.use(function (req, res, next) {
  if (req.hostname === 'localhost' && req.originalUrl !== "/botmppre") {
    urlOptions.url = mppreURL + req.originalUrl;
    request(urlOptions).pipe(res);
  }
});


app.listen(3000, function () {
  console.log('Bot listening on port 3000!');
});
