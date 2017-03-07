var express = require('express');
var mongoose = require('mongoose'), Admin = mongoose.mongo.Admin;;

var partials = require('express-partial');
var bodyParser = require('body-parser');
var session = require('express-session');
var app = express();
// app.use(partials()); // was throwing error: 'partials is not defined'
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/client'));

// connect to mongo db
var uri = 'mongodb://john:john@ds119210.mlab.com:19210/coinage_mvp';
console.log('uri for mongoose = ', uri);
mongoose.Promise = global.Promise;
mongoose.connect(uri);
var db = mongoose.connection;

var Schema = mongoose.Schema;

// var TestModelSchema = new Schema({
//     byline: String
// });

// Define schema
var TestModelSchema = new mongoose.Schema({ byline: String});
// Compile model from schema
var TestModel = mongoose.model('TestModel', TestModelSchema );

var testInstance = new TestModel({"byline": "By NICOLE PERLROTH"});

testInstance.save(function(err) {
  if(err) {console.error('testInstance.save error is: ', err)};
  console.log('no error in testInstance');
})

var Byline = mongoose.model('Byline', TestModelSchema);

TestModel.find({}).then
(function(bylines) {
  console.log('no error in Byline.find. bylines = ', bylines)})
  // add .catch for error

mongoose.connection
 .once('open', function() {
   console.log('Mongoose connection OPEN!');
 })

 .on('error', (error) => {
 console.error('Warning, this error from Mongoose:', error);
 });

 app.listen(8000);

 module.exports = app;
 // module.exports = mongoose.model('test', testSchema);

  // var testSchema = new mongoose.Schema({
  //   id: {
  //     type: Number,
  //     required: true,
  //     unique: true},
  //   title: {
  //     type: String,
  //     required: false,
  //     unique: false
  //   }
  // });

   // new Admin(db.db).listDatabases(function(err, result) {
   //         console.log('listDatabases succeeded');
   //         // database list stored in result.databases
   //         var allDatabases = result.databases;
   //         console.log('databases = ', allDatabases);
   //     });

   // var query = Saved_results.find({"byline": "By NICOLE PERLROTH"});
   // console.log('query result: ', query);

   // Saved_results.find(
     // {"byline": "By NICOLE PERLROTH"}, 'id', function (err, id) {
   //     if(err) console.error('db error is: ', err);
   //   }
   // })
 // })

 // .on('open', function() {
 //   new Admin(db.db).listDatabases(function(err, result) {
 //         console.log('listDatabases succeeded');
 //         // database list stored in result.databases
 //         var allDatabases = result.databases;
 //         console.log('databases = ', allDatabases);
 //     });
 // })

  // () => console.log('Mongoose connection OPEN!')


 // db.collection.find
 // Saved_results.find(
  //  {"_id": {
  //         "$oid": "58bdc331f36d2837b811247d"}
  //  }
 // )
// var test = db.Saved_results.find();
// console.log('testing db.Saved_results.find(): ', test);


// need these?
// app.set('views', __dirname + '/views');

// mongo docu:

// test mongoimport:
// mongoimport -h ds119210.mlab.com:19210 -d coinage_mvp -c Saved_results -u <user> -p <password> --file <input file>

// var test = (mongoimport -h ds119210.mlab.com:19210 -d coinage_mvp -c Saved_results -u john_packel -p Dostoyevsky@81m --file coinage_mvp);

// console.log('test import = ', test);

// {
//   id: "1",
//   title: "SendGrid Account Breach Was Used to Attack Coinbase, a Bitcoin Exchange",
//   byline: "By NICOLE PERLROTH",
//   pub_date: "2015-04-09T20:09:02Z",
//   intro "Government officials testified on Wednesday that virtual currencies like Bitcoin had opened up new avenues for crime that the authorities had not been able to keep up with....",
//   type: "article",
//   source: "NYTimes",
//   createdAt: "2017-03-06T15:02",
//   updatedAt: "null",
//   user_tags: "null",
//   user_notes: "This is a note the dev put in manually in mLab when setting up the initial record. Now that he's reading it, he's made good progress."
//   }
