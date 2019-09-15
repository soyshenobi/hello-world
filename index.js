var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.get('/sawyer', function (req, res) {
    res.send('Hello Sawyer!');
});

app.get('/poop', function (req, res) {
    res.send('Hello Poop!');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
