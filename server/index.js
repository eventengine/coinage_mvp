var express = require('express');
var mongoose = require('mongoose');
// var partials = require('express-partials'); // ?
var bodyParser = require('body-parser');
var session = require('express-session');
var app = express();
// app.use(partials()); // was throwing error: 'partials is not defined'
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/client'));



// connect to mongo db
var uri = 'mongodb://john_packel:Dostoyevsky@81m@ds119210.mlab.com:19210/coinage_mvp';
mongoose.Promise = global.Promise
mongoose.connect(uri);
var db = mongoose.connection;

app.listen(8000);

module.exports = app;

// need these?
// app.set('views', __dirname + '/views');

// mongo docu:
//mongodb://<dbuser>:<dbpassword>@ds119210.mlab.com:19210/coinage_mvp
// mongoose.Promise = global.Promise
// mongoose.connect(uri);
// var db = mongoose.connection;

// test mongoimport:
// mongoimport -h ds119210.mlab.com:19210 -d coinage_mvp -c Saved_results -u <user> -p <password> --file <input file>

// var test = (mongoimport -h ds119210.mlab.com:19210 -d coinage_mvp -c Saved_results -u john_packel -p Dostoyevsky@81m --file coinage_mvp);

// console.log('test import = ', test);
