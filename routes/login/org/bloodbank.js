var express = require('express');
var router = express.Router();
var userVerifier = require('./../../user-verifier');
var bloodStorageRoutes = require('./bloodbank/bloodstorage');
var adRoutes = require('./bloodbank/ad');

module.exports.registerRoutes = function(models, codes) {

  //post
  //update
  //delete
  //get


  router.get('/bbInfo/:loginId', function(req, res, next){
    console.log(req.params.loginId);
    models.BloodBank.findOne({login: req.params.loginId}).exec(function(err, bb){
      if(err) next(err);
      else if(!bb) res.status(codes.INTERNAL_SERVER).send({code: 0});
      else res.status(codes.OK).send({_id: bb._id, name: bb.name, address: bb.address});
    });
  });

  router.use('/:bbId/bloodStorage',
  function(req, res, next){
    req.body.bbId = req.params.bbId;
    next();
  }, bloodStorageRoutes.registerRoutes(models, codes));

  router.use('/:bbId/ad',
  function(req, res, next){
    req.body.bbId = req.params.bbId;
    next();
  }, adRoutes.registerRoutes(models, codes));

  var loginVerifier = function(req, res, next){
    userVerifier(req.body.user_id, 'ORGANIZATION', models, function(result){
      console.log(req.body.user_id);
      if(result) next();
      else res.status(codes.UNAUTHORIZED).send({code: 0});
    });
  }

  var rightVerifier = function(req, res, next){
    models.BloodBank.findById(req.params.id, function(err, bloodBank){
      if(err) next(err);
      else if(!bloodBank) res.status(codes.BAD_DATA).send({code: 1});
      else if(bloodBank.organization == req.body.orgId) next();
      else res.status(codes.UNAUTHORIZED).send({code: 0});
    });
  }



  router.get('/', loginVerifier, function(req, res, next){


    models.BloodBank.find({organization: req.body.orgId}, function(err, bloodBanks){
      if(err) next(err);
      else res.status(codes.OK).send(bloodBanks);
    });
  });
  router.get('/:id', loginVerifier, function(req, res, next){

    console.log(req.params.id);
    var id = req.params.id;
    models.BloodBank.findOne({_id: id, organization: req.body.orgId}).exec(function(err, bloodBank){
      console.log(err);
      if(err) next(err);
      else res.status(codes.OK).send(bloodBank);
    });
  });

  router.post('/', loginVerifier,
  function(req, res, next){

    new models.BloodBank(req.body).save(function(err, bloodBank){
      if(err) {next(err);console.log(err);}
      else if(!bloodBank) res.status(codes.INTERNAL_SERVER).send({code: 0});
      else res.status(codes.CREATED).send({_id: bloodBank._id, __v: bloodBank.__v});
    });
  });

  router.put('/:id', loginVerifier, rightVerifier, function(req, res, next){

    models.BloodBank.findByIdAndUpdate(req.params.id, {$set: req.body}, function(err, bloodBank){
      if(err) next(err);
      else if(!bloodBank){
        res.status(codes.INTERNAL_SERVER).send({code: 0});
      }
      else res.status(codes.CREATED).send({_id: bloodBank._id, __v: bloodBank.__v});
    });
  });

  router.delete('/:id', loginVerifier, rightVerifier, function(req, res, next){

    models.BloodBank.remove({_id: req.params.id}, function(err, removed){
      if(err) next(err);
      else if(removed == 0) res.status(codes.INTERNAL_SERVER).send({code: 0});
      else res.status(codes.OK).send({code: 1});
    });
  });



  return router;
}
