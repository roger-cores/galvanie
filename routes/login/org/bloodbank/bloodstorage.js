var express = require('express');
var router = express.Router();
var userVerifier = require('./../../../user-verifier');

module.exports.registerRoutes = function(models, codes) {



  var loginVerifier = function(req, res, next){
    userVerifier(req.body.user_id, ['ORGANIZATION', 'BLOODBANK'], models, function(result){
      if(result) next();
      else res.status(codes.UNAUTHORIZED).send({code: 0});
    });
  }

  var rightVerifier = function(req, res, next){
    models.BloodBankStorage.findById(req.params.id, function(err, storage){
      if(err) next(err);
      else if(!storage) res.status(codes.BAD_DATA).send({code: 1});
      else if(storage.bloodBank == req.body.bbId) next();
      else res.status(codes.UNAUTHORIZED).send({code: 0});
    });
  }

  router.get('/', loginVerifier, function(req, res, next){


    models.BloodBankStorage.find({bloodBank: req.body.bbId}).populate('bloodGroup', 'name').exec(function(err, bloodBanks){
      if(err) next(err);
      else res.status(codes.OK).send(bloodBanks);
    });
  });

  router.post('/', loginVerifier,
  function(req, res, next){

    new models.BloodBankStorage(req.body).save(function(err, storage){
      if(err) {next(err);console.log(err);}
      else if(!storage) res.status(codes.INTERNAL_SERVER).send({code: 0});
      else res.status(codes.CREATED).send({_id: storage._id, __v: storage.__v});
    });
  });

  router.put('/:id', loginVerifier, rightVerifier, function(req, res, next){

    models.BloodBankStorage.findByIdAndUpdate(req.params.id, {$set: req.body}, function(err, storage){
      if(err) next(err);
      else if(!storage){
        res.status(codes.INTERNAL_SERVER).send({code: 0});
      }
      else res.status(codes.CREATED).send({_id: storage._id, __v: storage.__v});
    });
  });

  router.delete('/:id', loginVerifier, rightVerifier, function(req, res, next){

    models.BloodBankStorage.remove({_id: req.params.id}, function(err, removed){
      if(err) next(err);
      else if(removed == 0) res.status(codes.INTERNAL_SERVER).send({code: 0});
      else res.status(codes.OK).send({code: 1});
    });
  });



  return router;
}
