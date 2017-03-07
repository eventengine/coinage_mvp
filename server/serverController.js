exports.saveData = function(req, res){
  console.log('serverController. received saveData request. req.body = ', req.body);

    // re-render db content because we are adding to it

 var dbtemp = {
    dbtitle: "SendGrid Account Breach Was Used to Attack Coinbase, a Bitcoin Exchange",
    dburl: "http://bits.blogs.nytimes.com/2015/04/09/sendgrid-email-breach-was-used-to-attack-coinbase-a-bitcoin-exchange/",
    dbpub_date: "2015-04-09T20:09:02Z"
  };
  res.send(dbtemp);
  // res.send(req.body.chili)
}

exports.searchRequest = function(req, res){
  console.log('serverController. received searchRequest. req.body = ', req.body);

  res.send({
    title: "SendGrid Account Breach Was Used to Attack Coinbase, a Bitcoin Exchange",
    byline: "By NICOLE PERLROTH",
    pub_date: "2015-04-09T20:09:02Z",
    intro: "Coinbase, one of the most popular Bitcoin exchanges, confirmed that hackers had compromised its SendGrid account, though it said no Bitcoin were stolen....",
    url: "http://bits.blogs.nytimes.com/2015/04/09/sendgrid-email-breach-was-used-to-attack-coinbase-a-bitcoin-exchange/",
    type: "article",
    source: "NYTimes",
    user_tags: "Coinbase",
    user_notes: "Another note entered in mLab.",
    createdAt: "2017-03-06T11:35",
    updatedAt: null
  })
};

// exports.renderDatabase = function(req, res){
//   console.log('serverController. received renderDatabase request. req.body = ', req.body);
//   res.send(req.body.chili)
// }
