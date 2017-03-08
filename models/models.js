// create models

//  Use knex/mongoose to build your table(s)/schema
// In a models directory, create your model(s) with methods to fetchAll from a table/collection and addOne to that table/collection

// shortly-ang example:
var UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  } // etc....
});

// UserSchema.methods.comparePasswords = function (candidatePassword) {
//   var savedPassword = this.password;
//   return Q.Promise(function (resolve, reject) { //......

module.exports = mongoose.model('users', UserSchema); // also had module.exports = app in another file; diff files won't overwrite?

// https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose

// Create an instance of model SomeModel
var awesome_instance = new SomeModel({ name: 'awesome' });
// Save the new model instance, passing a callback
awesome_instance.save(function (err) {
  if (err) return handleError(err);
  // saved!
});
var Athlete = mongoose.model('Athlete', yourSchema);
// find all athletes who play tennis, selecting the 'name' and 'age' fields
Athlete.find({ 'sport': 'Tennis' }, 'name age', function (err, athletes) {
  if (err) return handleError(err);
  // 'athletes' contains the list of athletes that match the criteria.
})

// Mongodb docu:
// Create song schema
var songSchema = mongoose.Schema({
  decade: String,
  artist: String,
  song: String,
  weeksAtOne: Number
});

// Store song documents in a collection called "songs"
var Song = mongoose.model('songs', songSchema);

// Create seed data
var seventies = new Song({
  decade: '1970s',
  artist: 'Debby Boone',
  song: 'You Light Up My Life',
  weeksAtOne: 10
});
module.exports = mongoose.model('users', UserSchema);

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
