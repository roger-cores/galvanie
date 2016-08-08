var express = require('express');
var router = express.Router();
var userVerifier = require('./../../../user-verifier');
var utils = require('./../../../../utils');

module.exports.registerRoutes = function(models, codes) {



  var loginVerifier = function(req, res, next){
    userVerifier(req.body.user_id, ['ORGANIZATION', 'BLOODBANK'], models, function(result){
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
    models.NewsFeed.findById(req.params.id, function(err, ad){
      if(err) next(err);
      else if(!ad) res.status(codes.BAD_DATA).send({code: 1});
      else if(ad.requestorBloodBank == req.body.bbId) next();
      else res.status(codes.UNAUTHORIZED).send({code: 0});
    });
  }

  router.get('/bloodgroup/:bgId', loginVerifierForUser, function(req, res, next){
    models.NewsFeed.find({expiry: {"$gte": new Date()}, requestedBloodGroup: req.params.bgId}, 'expiry requestorBloodBank').populate('requestorBloodBank', 'name organization address').exec(function(err, ads){
      if(err) next(err);
      else {
        var options = {
          path: 'requestorBloodBank.organization',
          model: 'organization',
          select: 'name'
        }

        models.NewsFeed.populate(ads, options, function(err, populatedAds){

          options.path = 'requestorBloodBank.address.city';
          options.model = 'city';
          models.NewsFeed.populate(ads, options, function(err, populatedAds){
            options.path = 'requestorBloodBank.address.state';
            options.model = 'state';
            models.NewsFeed.populate(ads, options, function(err, populatedAds){
              res.status(codes.OK).send(populatedAds);
            });
          });


        });

      }
    });
  });

  //push
  router.put('/:id/pushUser/:userId', loginVerifierForUser, function(req, res, next){
    /*models.NewsFeed.findById(req.params.id, function(err, ad){
      if(err) next(err);
      else {
        ad.users.push({user: req.params.userId});
        console.log(ad);
        ad.save(function(err, ad){
          if(err) next(err);
          else res.status(codes.CREATED).send({code: 1});
        });
      }

    });*/

    models.NewsFeed.findOne({_id: req.params.id, 'users.user': req.params.userId}, function(err, ad){
      if(err) next(err);
      else if(ad) res.status(codes.BAD_DATA).send({code: 0});
      else {
        models.NewsFeed.findByIdAndUpdate(
          {_id: req.params.id},
          {$addToSet: {users: {user: req.params.userId}}},
          function(err, ad){
            if(err) next(err);
            else res.status(codes.CREATED).send({code: 1});
          }
        );
      }
    });


  });

  //pullUser
  router.put('/:id/pullUser/:userId', loginVerifierForUser, function(req, res, next){
    models.NewsFeed.findById(req.params.id, function(err, ad){
      if(err) next(err);
      else {
        for(var i=0; i<ad.users.length; i++){
          if(ad.users[i].user.equals(req.params.userId.toString())){
            utils.remove(ad.users, ad.users[i]);
            break;
          }
        }
        ad.save(function(err, ad){
          if(err) next(err);
          else res.status(codes.CREATED).send({code: 1});
        });
      }

    });
  });
  //get current info
  router.get('/forUser/:userId', loginVerifierForUser, function(req, res, next){
    models.NewsFeed.findOne({'users.user': req.params.userId, 'users.done': false, 'expiry': {$gt: Date.now()}}, 'requestorBloodBank users expiry').populate('requestorBloodBank','name organization login address').exec(function(err, ad){
      console.log('lookin for ad ' + ad);
      if(err) next(err);
      else if(!ad) {

        models.NewsFeed.findOne({'users.user': req.params.userId, 'users.done': true}).exec(function(err, ad){
          if(err) next(err);
          else if(!ad){res.status(codes.OK).send({code: 1, result: true});}
          else {
            for(var i=0; i<ad.users.length; i++){
              if((ad.users[i].user.equals(req.params.userId.toString())) && (ad.users[i].doneDate!=null?(Math.ceil((Math.abs((new Date()).getTime() - (new Date(ad.users[i].doneDate)).getTime()))/(1000*3600*24))<95):false)){
                var lastDonated = ad.users[i].doneDate;
                res.status(codes.OK).send({code: 1, result: true, status: {doneDate: lastDonated}});
                console.log('yayy');
                return;
              }
            }
            res.status(codes.OK).send({code: 1, result: true});
          }
        });
      }
      else {
        for(var i=0; i<ad.users.length; i++){

          if((ad.users[i].user.equals(req.params.userId.toString()))){

            var options = {
              path: 'requestorBloodBank.organization',
              model: 'organization',
              select: 'name login'
            }

            var callBack = function(index){
              return function(err, ad){
                options.path = 'requestorBloodBank.address.city';
                options.model = 'city';
                models.NewsFeed.populate(ad, options, function(err, ad){
                  options.path = 'requestorBloodBank.address.state';
                  options.model = 'state';
                  models.NewsFeed.populate(ad, options, function(err, ad){
                    options.path = 'requestorBloodBank.organization.login';
                    options.model = 'login';
                    options.select = 'email mobile';
                    models.NewsFeed.populate(ad, options, function(err, ad){

                      res.status(codes.OK).send({code: 1, result: false, ad: ad, status: ad.users[index]});


                    });

                  });
                });
              }
            }

            models.NewsFeed.populate(ad, options, callBack(i));




          }
        }



      }
    });
  });

  router.get('/', loginVerifier, function(req, res, next){


    models.NewsFeed.find({requestorBloodBank: req.body.bbId, expiry: {"$gte": new Date()}}).populate('requestedBloodGroup', 'name').exec(function(err, ads){
      if(err) next(err);
      else res.status(codes.OK).send(ads);
    });
  });

  router.get('/:id', loginVerifier, rightVerifier, function(req, res, next){

    models.NewsFeed.findOne({_id: req.params.id}, 'users')
    .populate('users.user')
    .exec(function(err, ad){
      console.log(ad);
      if(err) next(err);
      else {
        var options = {};
        options.path = 'users.user.login';
        options.model = 'login';
        options.select = 'email mobile address';
        models.NewsFeed.populate(ad, options, function(err, ad){

          options.path = 'users.user.login.address.city';
          options.model = 'city';
          options.select = 'name';
          models.NewsFeed.populate(ad, options, function(err, ad){
            options.path = 'users.user.login.address.state';
            options.model = 'state';
            models.NewsFeed.populate(ad, options, function(err, ad){
              res.status(codes.OK).send({code: 1, ad: ad});
            });
          });


        });


      }
    });
  });

  router.post('/', loginVerifier,
  function(req, res, next){

    new models.NewsFeed(req.body).save(function(err, ad){
      if(err) {next(err);console.log(err);}
      else if(!ad) res.status(codes.INTERNAL_SERVER).send({code: 0});
      else res.status(codes.CREATED).send({_id: ad._id, __v: ad.__v});
    });
  });

  router.put('/:id', loginVerifier, rightVerifier, function(req, res, next){

    models.NewsFeed.findByIdAndUpdate(req.params.id, {$set: req.body}, function(err, ad){
      if(err) next(err);
      else if(!ad){
        res.status(codes.INTERNAL_SERVER).send({code: 0});
      }
      else res.status(codes.CREATED).send({_id: ad._id, __v: ad.__v});
    });
  });

  router.put('/:id/updateUsers', loginVerifier, rightVerifier, function(req, res, next){
    console.log(req.body);

    models.NewsFeed.update({'users.user': req.body.user.user._id, 'users.done': false, '_id': req.params.id}, {'$set': {
      'users.$.done': req.body.user.done,
      'users.$.doneDate': req.body.user.doneDate,
      'users.$.accepted': req.body.user.accepted
    }}, function(err, obj){
      console.log(err);
      console.log(obj);
      if(req.body.user.done && obj.nModified == 1){
        models.NewsFeed.findById(req.params.id, '_id requestorBloodBank requestedBloodGroup').populate('requestorBloodBank').exec(function(err, ad){
          if(err) next(err);
          else if(!ad) next({code: 0});
          else {
            models.BloodBankStorage.update({bloodBank: ad.requestorBloodBank, bloodGroup: ad.requestedBloodGroup}, {$inc: {units: 1}}).exec(function(err, obj){
              if(err) next(err);
              else res.status(codes.CREATED).send({code: 0});
            });
          }
        });
      }
    });
  });

  router.delete('/:id', loginVerifier, rightVerifier, function(req, res, next){

    models.NewsFeed.remove({_id: req.params.id}, function(err, removed){
      if(err) next(err);
      else if(removed == 0) res.status(codes.INTERNAL_SERVER).send({code: 0});
      else res.status(codes.OK).send({code: 1});
    });
  });



  return router;
}
