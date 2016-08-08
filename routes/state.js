var express = require('express');
var router = express.Router();


module.exports.registerRoutes = function(models, codes) {
  router.get('/', function(req, res, next){
    models.State.find({}, function(err, states){
      if(err) next({err: err});
      else res.status(codes.OK).send(states);
    });
  });
  return router;
}
