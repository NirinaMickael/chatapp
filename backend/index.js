var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var arr  = [];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
  res.json({arr: arr});
});

app.post('/', function(req, res) {
  console.log(req.body);
  arr.push(req.body);
  res.end('Data received');
})

app.listen(3000, console.log.call(console, 'Server started.'));
