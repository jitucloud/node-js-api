var express = require("express");
var bodyParser = require('body-parser');
var compression = require('compression');
var setContentTypeHeader = require('./src/common/middleware/SetContentTypeHeaders');

var app = express();
var port = 3000;

app.use(function(req, res, next) {

    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method, Authorization');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');

    if (req.method === 'OPTIONS') {
        res.send(200);
    } else {
        next();
    }
});

app.use(setContentTypeHeader);
app.use(compression());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var airportRouter = require('./src/routes/airportRoutes')();
app.use('/api/airports', airportRouter);

app.get('/api',  function (req, res) {
    res.json('Welcome to my API !');
});

var server = app.listen(port,function(){
console.log('server is running on http://127.0.0.1:3000');
});