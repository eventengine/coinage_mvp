exports.saveData = function(req, res){
  console.log('serverController. received saveData request. req.body = ', req.body);
  res.send(req.body.chili)
}

exports.searchRequest = function(req, res){
  console.log('serverController. received searchRequest. req.body = ', req.body);
  res.send(req.body.chili)
}

exports.renderDatabase = function(req, res){
  console.log('serverController. received renderDatabase request. req.body = ', req.body);
  res.send(req.body.chili)
}
