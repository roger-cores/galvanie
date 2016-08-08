var express = require('express');
var router = express.Router();
var userVerifier = require('./../../user-verifier');


module.exports.registerRoutes = function(models, codes) {


  var loginVerifierForOrganization = function(req, res, next){
    userVerifier(req.body.user_id, 'ORGANIZATION', models, function(result){
      console.log(req.body.user_id);
      if(result) next();
      else res.status(codes.UNAUTHORIZED).send({code: 0});
    });
  }

  var loginVerifierForOrganizationAndBloodbank = function(req, res, next){
    userVerifier(req.body.user_id, ['ORGANIZATION', 'BLOODBANK'], models, function(result){
      console.log(req.body.user_id);
      if(result) next();
      else res.status(codes.UNAUTHORIZED).send({code: 0});
    });
  }

  var loginVerifierForUser = function(req, res, next){
    userVerifier(req.body.user_id, 'USER', models, function(result){

      if(result) next();
      else res.status(codes.UNAUTHORIZED).send({code: 0});
    });
  }

  var rightVerifier = function(req, res, next){


    models.Request.findOne({_id: req.params.id, requestorLogin: req.body.user_id}, function(err, request){
      if(err) next(err);
      else if(!request) res.status(codes.UNAUTHORIZED).send({code: 1});
      else next();
    });
  }


  router.post('/',
  loginVerifierForUser,
  function(req, res, next){


    new models.Request(req.body).save(function(err, request){
      if(err) next(err);
      else if(!request) res.status(codes.INTERNAL_SERVER).send({code: 0})
      else {
        res.status(codes.CREATED).send({_id: request._id, __v: request.__v});
      }
    });
  });

  //get all requests by bloodgroup id
  router.get('/city/:cityId',
  loginVerifierForOrganizationAndBloodbank,
  function(req, res, next){
    models.Request.find({active: true, 'address.city': req.params.cityId})
      .populate('requestedBloodGroup')
      .exec(function(err, requests){
        if(err) next(err);
        else res.status(codes.OK).send(requests);
      });
  });

  //get current request if exists
  router.get('/',
  loginVerifierForUser,
  function(req, res, next){
    models.Request.findOne({active: true, requestorLogin: req.body.user_id, deadline: {$gte: Date.now()}})
      .populate('requestedBloodGroup')
      .exec(function(err, request){
        if(err) next(err);
        else if(!request) res.status(codes.OK).send({code: 1})
        else res.status(codes.OK).send(request);
      });
  });

  //delete current request by id
  router.delete('/:id',
  loginVerifierForUser,
  rightVerifier,
  function(req, res, next){
    models.Request.findByIdAndUpdate(req.params.id, {active: false}, function(err, resp){
      if(err) next(err);
      else res.status(codes.CREATED).send({code: 1});
    });
  })




  return router;
}
