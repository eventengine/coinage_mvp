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

mongoose.connection
 .once('open', function() {
   console.log('Mongoose connection OPEN!');
 })

 .on('error', (error) => {
 console.error('Warning, this error from Mongoose:', error);
 });

var Schema = mongoose.Schema;

// Define schema
var SavedDataModelSchema = new mongoose.Schema({
  title: String,
  byline: String,
  pub_date: String, // change to Date?
  intro: String,
  url: String,
  type: String,
  source: String,
  user_tags: String, // change to Array?
  user_notes: String,
  createdAt: Date,
  updatedAt: Date
});

// Compile model from schema
var SavedDataModel = mongoose.model('SavedDataModel', SavedDataModelSchema );

var dataToSave = {}; // populate this from $scope.fullRecord (create fullRecord from individual fields returned from search)

var testInstance = new SavedDataModel({byline: "testing..."});
// var saveInstance = new SavedDataModel(dataToSave);

// var testInstance2 = new SavedDataModel({
//   title: "Law Enforcement Strikes Back in Bitcoin Hearing",
//   byline: "By NATHANIEL POPPER",
//   pub_date: "2014-01-29T16:16:03Z",
//   intro: "Government officials testified on Wednesday that virtual currencies like Bitcoin had opened up new avenues for crime that the authorities had not been able to keep up with....",
//   url:  "http://dealbook.nytimes.com/2014/01/29/law-enforcement-strikes-back-in-bitcoin-hearing/",
//   type: "article",
  // source: "NYTimes",
  // user_tags: "Lawsky, Benjamin M, Vance, Cyrus R Jr", // how multiple?
  // user_notes: "This is a note the dev put in manually in mLab when setting up the initial record. Now that he's reading it, he's made good progress.",
  // createdAt: "2017-03-06T23:41",
  // updatedAt: null
//   });

// var testInstance2 = new SavedDataModel({
//   title: "SendGrid Account Breach Was Used to Attack Coinbase, a Bitcoin Exchange",
//   byline: "By NICOLE PERLROTH",
//   pub_date: "2015-04-09T20:09:02Z",
//   intro: "Coinbase, one of the most popular Bitcoin exchanges, confirmed that hackers had compromised its SendGrid account, though it said no Bitcoin were stolen....",
//   url: "http://bits.blogs.nytimes.com/2015/04/09/sendgrid-email-breach-was-used-to-attack-coinbase-a-bitcoin-exchange/",
//   type: "article",
//   source: "NYTimes",
//   user_tags: "Coinbase",
//   user_notes: "Another note entered in mLab.",
//   createdAt: "2017-03-06T11:35",
//   updatedAt: null
//   });

testInstance.save(function(err) {
  if(err) {console.error('testInstance.save error is: ', err)};
  console.log('no error in testInstance');
})

// on every save, add the date
SavedDataModelSchema.pre('save', function(next) {
  // get the current date
  var currentDate = new Date();
  // change the updated_at field to current date
  this.updatedAt = currentDate;
  // if created_at doesn't exist, add to that field
  if (!this.updatedAt)
    this.updatedAt = currentDate;
  console.log('updatedAt saved: ', this.updatedAt);
  next();
});

// var Byline = mongoose.model('Byline', SavedDataModelSchema);

SavedDataModel.find({}).then
(function(bylines) {
  console.log('no error in SavedDataModel. bylines = ', bylines)})
  // add .catch for error



 app.listen(8000);

 module.exports = app;
 // module.exports = mongoose.model('test', testSchema);

 // var TestModelSchema = new Schema({
 //     byline: String
 // });

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
  // title: "SendGrid Account Breach Was Used to Attack Coinbase, a Bitcoin Exchange",
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
