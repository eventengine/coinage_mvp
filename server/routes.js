var serverController = require('./serverController.js');
var request = require('request');

module.exports = function (app, express) { // OK because separate file - won't overwrite?
  console.log('*************  in server/routes.js');

  // app.get('/otherstuff', serverController.renderDatabase);
  // app.post('/searchRequest', serverController.searchRequest);

  app.post('/saveData', serverController.saveData);
  // app.post('/searchRequest', serverController.searchRequest);

  app.post('/searchRequest', function (req, res) {
    console.log('routes.js : NYTrequest req.body = ', req.body);
    console.log('routes.js . api req is ', 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + req.body.search + '&api-key=6a37f426b37a40daa8a4bca027c34077' );

    request('https://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + req.body.search + '&api-key=6a37f426b37a40daa8a4bca027c34077',
     function(error,response, body){
      if(error){
        console.error('Error at line 40 in index.js (server).');
        return next (error);
      }
      else {
      // console.log('routes.js . body= ', body);
      res.send(body);}
    })
  });



  // If a request is sent somewhere other than the routes above, send it to index.html

};
