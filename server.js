var express = require('express');
var app = express();
var path = require('path');

// dossier public pour les assets
app.use(express.static(__dirname + '/public'));

// mettre en place une route pour la page index.html
app.get('*', function(req, res){
  res.sendFile(path.join(__dirname + '/public/views/index.html'));
});

app.listen(8080);
console.log('Port : 8080');
