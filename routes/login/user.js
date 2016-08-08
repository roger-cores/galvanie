var express = require('express');
var router = express.Router();
var requestRoute = require('./user/request');

module.exports.registerRoutes = function(models, codes, preAuthenticate, passport) {

  router.use('/request',
    preAuthenticate,
    passport.authenticate('accessToken', {session: false}),
    requestRoute.registerRoutes(models, codes));

  router.post('/',
    preAuthenticate,
    passport.authenticate('accessToken', {session: false}),
    function(req, res, next){
      new models.User(req.body).save(function(err, user){
        if(err) next(err);
        else if(!user) res.status(codes.INTERNAL_SERVER).send({code: 0});
        else res.status(codes.CREATED).send({_id: user._id, __v: user.__v});
      });
    });

    router.get('/userInfo/:loginId',
      preAuthenticate,
      passport.authenticate('accessToken', {session: false}),
      function(req, res, next){
        models.User.findOne({login: req.params.loginId}).populate('bloodGroup', 'name').exec(function(err, user){
          if(err) {console.log(err); next(err);}
          else if(!user) {console.log('no user'); res.status(codes.INTERNAL_SERVER).send({code: 0});}
          else res.status(codes.CREATED).send(user);
        });

    });

  return router;
}
