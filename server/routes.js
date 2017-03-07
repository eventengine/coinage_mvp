var serverController = require('./serverController.js');

module.exports = function (app, express) { // OK because separate file - won't overwrite?
  console.log('*************  in server/routes.js');

  // app.get('/otherstuff', serverController.renderDatabase);
  // app.post('/searchRequest', serverController.searchRequest);

  app.post('/saveData', serverController.saveData);
  app.post('/searchRequest', serverController.searchRequest);

  // If a request is sent somewhere other than the routes above, send it to index.html

};
