var express = require('express');
var router = express.Router();
var bloodBankRoute = require('./org/bloodbank');

module.exports.registerRoutes = function(models, codes, preAuthenticate, passport) {

  router.use('/:orgId/bloodbank',
  preAuthenticate,
  passport.authenticate('accessToken', {session: false}),
  function(req, res, next){
    req.body.orgId = req.params.orgId;
    next();
  },
  bloodBankRoute.registerRoutes(models, codes));

  router.post('/',
  preAuthenticate,
  passport.authenticate('accessToken', {session: false}),
  function(req, res, next){
    new models.Organization(req.body).save(function(err, org){
      if(err) next(err);
      else if(!org) res.status(codes.INTERNAL_SERVER).send({code: 0});
      else res.status(codes.CREATED).send({_id: org._id, __v: org.__v});
    });
  });

  router.get('/check-license/:license', function(req, res, next){
    models.Organization.findOne({license: req.params.license}, function(err, org){
      if(org) res.status(codes.OK).send({code: 1, result: true});
      else res.status(codes.OK).send({code: 1, result: false});
    });
  });

  router.get('/orgInfo/:loginId', preAuthenticate, function(req, res, next){
    models.Organization.findOne({login: req.params.loginId}, function(err, org){
      if(err) next(err);
      else if(!org) res.status(codes.INTERNAL_SERVER).send({code: 0});
      else res.status(codes.OK).send({_id: org._id, name: org.name});
    });
  });

  return router;
}
