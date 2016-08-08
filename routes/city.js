var express = require('express');
var router = express.Router();


module.exports.registerRoutes = function(models, codes) {
  router.get('/state/:state_id', function(req, res, next){
    models.City.find({state: req.params.state_id}, function(err, cities){
      if(err) next({err: err});
      else res.status(codes.OK).send(cities);
    });
  });
  return router;
}
