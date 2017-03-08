require('./index.js');
var models = require('../models/models.js');

exports.saveData = function(req, res){
  console.log('serverController. received saveData request. req.body = ', req.body);

  // console.log('getDB = ', getDB);
    // re-render db content because we are adding to it

    var dbtemp = {
       dbtitle: req.body.title,
      //  dburl:
       dbpub_date: req.body.pub_date,
       dbintro: req.body.intro
     };

    //  var params = [req.body.title, req.body.pub_date, req.body.intro];
     models.save(dbtemp, function(err, results) {
       if (err) { console.error('error in serverController l 19') }
       res.sendStatus(201);
       res.send(results); // 1st 5 items in db
     });
   }


 // "http://bits.blogs.nytimes.com/2015/04/09/sendgrid-email-breach-was-used-to-attack-coinbase-a-bitcoin-exchange/",

 // var dbtemp = {
 //    dbtitle: "SendGrid Account Breach Was Used to Attack Coinbase, a Bitcoin Exchange",
 //    dburl: "http://bits.blogs.nytimes.com/2015/04/09/sendgrid-email-breach-was-used-to-attack-coinbase-a-bitcoin-exchange/",
 //    dbpub_date: "2015-04-09T20:09:02Z"
 //  };

// var SavedDataModel = mongoose.model('SavedDataModel', SavedDataModelSchema );
//
//  var dataRead = SavedDataModel.find({
//     title: "Law Enforcement Strikes Back in Bitcoin Hearing",
//     pub_date: "2014-01-29T16:16:03Z"
//   })
 //  .then
 //  (function(anything) {
 //    console.log('no error in SavedDataModel. db contents = ', anything)})
    // add .catch for error

  // res.send(dataRead);
//   res.send(dbtemp);
//   // res.send(req.body.chili)
// }

// exports.searchRequest = function(req, res){
//   console.log('serverController. received searchRequest. req.body = ', req.body);

  // moved to server/routes request('https://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + req.body + '&api-key=6a37f426b37a40daa8a4bca027c34077',
  //  function(error,response, body){
  //   if(error){
  //     console.error('Error at line 40 in index.js (server).');
  //     return next (error);
  //   }
  //   else {
  //   // console.log(body);
  //   res.send(body);}
  // })

  // res.send({
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
  // })
// };

// exports.renderDatabase = function(req, res){
//   console.log('serverController. received renderDatabase request. req.body = ', req.body);
//   res.send(req.body.chili)
// }
