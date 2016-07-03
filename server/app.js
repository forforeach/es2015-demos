var express = require('express');
var app = express();

app.use('/static', express.static(__dirname + '/static'));

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.get('/tags', function (req, res) {
    res.json(['async', 'tags', 'api', 'cool'])
});

app.listen(5000, function () {
    console.log('Listening on 5000');
});