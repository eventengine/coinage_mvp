var serverController = require('../server/serverController.js');
var mongoose = require('mongoose');
var results;
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

// create your model(s) with methods to fetchAll from a table/collection and addOne to that table/collection
// Compile model from schema
var SavedDataModel = mongoose.model('SavedDataModel', SavedDataModelSchema );

module.exports = { // refactor like Fizzbuzz; save function & find function; return {save: save, find: find}
  save: function (dbtemp, callback) {
    var testInstance = new SavedDataModel({ dbtemp });
    testInstance.save(function(err) {
      if(err) {callback(err, null)}
      else {console.log('models.js l 45: no error in testInstance')}
    })
  // results =
  SavedDataModel.find({}).then(function(results) {
    console.log('models.js. l 49. no error in SavedDataModel. db search for results[1]: \n', results[1])});
    console.log('full db: \n', results);
    // add .catch for error
    // callback(null, results); // limit to 1st 5 items in db?
      console.log('results after .find all = ', results);
    callback(results[1]);
  }
}
///
// title: "Law Enforcement Strikes Back in Bitcoin Hearing",
// pub_date: "2014-01-29T16:16:03Z"

// shortly-ang example:
// var UserSchema = new mongoose.Schema({
//   username: {
//     type: String,
//     required: true,
//     unique: true
//   } // etc....
// });

// UserSchema.methods.comparePasswords = function (candidatePassword) {
//   var savedPassword = this.password;
//   return Q.Promise(function (resolve, reject) { //......

// module.exports = mongoose.model('users', UserSchema); // also had module.exports = app in another file; diff files won't overwrite?

// https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose

// Create an instance of model SomeModel
// var awesome_instance = new SomeModel({ name: 'awesome' });
// // Save the new model instance, passing a callback
// awesome_instance.save(function (err) {
//   if (err) return handleError(err);
//   // saved!
// });
// var Athlete = mongoose.model('Athlete', yourSchema);
// // find all athletes who play tennis, selecting the 'name' and 'age' fields
// Athlete.find({ 'sport': 'Tennis' }, 'name age', function (err, athletes) {
//   if (err) return handleError(err);
//   // 'athletes' contains the list of athletes that match the criteria.
// })

// Mongodb docu:
// Create song schema
// var songSchema = mongoose.Schema({
//   decade: String,
//   artist: String,
//   song: String,
//   weeksAtOne: Number
// });
// console.log('testing data from serverController to models.js for db. dbtemp = ', dbtemp);
// // Store song documents in a collection called "songs"
// var Song = mongoose.model('songs', songSchema);
//
// // Create seed data
// var seventies = new Song({
//   decade: '1970s',
//   artist: 'Debby Boone',
//   song: 'You Light Up My Life',
//   weeksAtOne: 10
// });
// module.exports = mongoose.model('users', UserSchema);

// Ian: should be a query in mongoose to show which databases you have;
  // But I need a model defined before I can access data.
  // Probably best to set up new schema & model, rather than try to pull in what I created in mLab.

//  Getting list of all databases with Mongoose
 // There are some similar questions but all of them involves using the MongoDB NodeJS driver instead of Mongoose ODM.

//   StackO: You can't directly get the list from the connection provided by mongoose, but it's easy to do with the mongo Admin object as it contains a function called listDatabases:
//
// var mongoose = require('mongoose')
//     , Admin = mongoose.mongo.Admin;
//
// /// create a connection to the DB
// var connection = mongoose.createConnection(
//     'mongodb://user:pass@localhost:port/database');
// connection.on('open', function() {
//     // connection established
//     new Admin(connection.db).listDatabases(function(err, result) {
//         console.log('listDatabases succeeded');
//         // database list stored in result.databases
//         var allDatabases = result.databases;
//     });
// });

// {
  // id: "1",
  // title: "SendGrid Account Breach Was Used to Attack Coinbase, a Bitcoin Exchange",
  // byline: "By NICOLE PERLROTH",
  // pub_date: "2015-04-09T20:09:02Z",
  // intro "Government officials testified on Wednesday that virtual currencies like Bitcoin had opened up new avenues for crime that the authorities had not been able to keep up with....",
  // type: "article",
  // source: "NYTimes",
  // createdAt: "2017-03-06T15:02",
  // updatedAt: "null",
  // user_tags: "null",
  // user_notes: "This is a note the dev put in manually in mLab when setting up the initial record. Now that he's reading it, he's made good progress."
  // }
