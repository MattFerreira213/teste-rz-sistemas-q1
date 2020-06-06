var express = require('express');
var app = express();

app
.use(express.static('node_modules'))
.use(express.static('images'))
.get('/', function(req, res) {
  res.sendfile("./index.html");
});

app.listen(3000, function(){
  console.log("Server rodando...")
} );


