var express = require('express');
var router = express.Router();


module.exports.registerRoutes = function(models, codes) {
  router.get('/', function(req, res, next){
    models.BloodGroup.find({}, function(err, bloodgroups){
      if(err) next({err: err});
      else res.status(codes.OK).send(bloodgroups);
    });
  });
  return router;
}
