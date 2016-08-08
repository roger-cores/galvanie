var express = require('express');
var login = require('connect-ensure-login');
var router = express.Router();
var crypto = require('crypto');
var userRoute = require('./login/user')
var orgRoute = require('./login/org');


module.exports.registerRoutes = function(models, passport, oauth, codes) {



    var preAuthenticate = function(req, res, next){
      if(req.session.access_token)
        var tokenHash = crypto.createHash('sha1').update(req.session.access_token).digest('hex');
      else {res.status(codes.UNAUTHORIZED).send({message: 'Unauthorized'}); return;}
      models.Token.findOne({name: tokenHash}, function(err, token){
          if(err) next(err);
          else if(!token){res.status(codes.UNAUTHORIZED).send({message: 'Unauthorized'})}

          else if(token.expirationDate < Date.now()) res.status(codes.UNAUTHORIZED).send({message: 'Unauthorized'})
          else {

              req.body.access_token = req.session.access_token;

              models.ID.findOne({email: token.userId}, function(err, user){
                  if(err) next(err);
                  else if(!user) res.status(codes.UNAUTHORIZED).send({message: 'Unauthorized'})
                  else {
                    req.body.user_id = user._id;
                    next();
                  }
              });
          };
      });
    }


    router.use('/user',
      userRoute.registerRoutes(models, codes, preAuthenticate, passport)
    );

    router.use('/org',
      orgRoute.registerRoutes(models, codes, preAuthenticate, passport)
    );

    router.post('/validate-token',
      passport.authenticate('clientPassword', {session: false}),
      function(req, res, next){

        var tokenHash = crypto.createHash('sha1').update(req.body.access_token).digest('hex');

        models.Token.findOne({name: tokenHash}, function(err, token){
            if(err) next(err);
            else if(!token){res.status(codes.UNAUTHORIZED).send({message: 'Unauthorized'})}

            else if(token.expirationDate < Date.now()) res.status(codes.UNAUTHORIZED).send({message: 'Unauthorized'});
            else {
              req.session.access_token = req.body.access_token;
              models.ID.find({email: token.userId}, function(err, user){
                if(user) req.session.login = user.id;
              })
              res.status(codes.OK).send({code: 1})

            };
        });
    });

    router.post('/oauth/token', oauth.token);

    router.get('/logout', function(req, res) {
        req.logout();
        req.session.access_token = null;
        res.status(codes.OK).send({code: 1});
    });



    router.post('/signup',
     passport.authenticate('clientPassword', {session: false}),
     function(req, res, next){
    	passport.authenticate('local-signup', function(err, user, info){
        console.log(err);
        console.log(user);
        console.log(info);
        if(err) {console.log(err);next(err);}
    		else if(!user){next({code: 0, message: 'signup failed'});}
        else {
          res.status(codes.CREATED).send({_id: user._id, __v: user.__v})
        }
        console.log('here');

    	})(req, res, next);
    });

		router.put('/change-pass',
      passport.authenticate('clientPassword', {session: false}),
      function(req, res, next){
			passport.authenticate('local-login', function(err, user, info){
				if(err) {next(err); return;}
				if(!user) {res.status(codes.UNAUTHORIZED).send({message: 'Unauthorized'}); return;};
				if(req.body.newpassword)
				user.password = user.generateHash(req.body.newpassword);
				user.save(function(err){
					if(err) next(err);
					else res.status(codes.CREATED).send({code: 1, id: user._id});
				});
			})(req, res, next);
		});

    router.get('/loginInfo',
      preAuthenticate,
      function(req, res, next){
        console.log(req.body.user_id);
        models.ID.findById(req.body.user_id, function(err ,user){
          if(err) next(err);
          else if(!user) res.status(codes.INTERNAL_SERVER).send({code: 0});
          else res.status(codes.OK).send({_id: user._id, type: user.type, email: user.email, mobile: user.mobile, address: user.address})
        });
		});



    

    router.get('/check-email/:email',
      function(req, res, next){
        models.ID.findOne({email: req.params.email}, function(err, user){
          console.log(req.params.email);
          console.log(user);
          if(user) res.status(codes.OK).send({code: 1, result: true});
          else res.status(codes.OK).send({code: 1, result: false});
        })
      }
    );

    router.get('/check-mobile/:mobile',
      function(req, res, next){
        models.ID.findOne({mobile: req.params.mobile}, function(err, user){
          console.log(req.params.mobile);
          if(user) res.status(codes.OK).send({code: 1, result: true});
          else res.status(codes.OK).send({code: 1, result: false});
        })
      }
    );



	return router;
}

module.exports.isLoggedIn = function(req, res, next){
	if(req.isAuthenticated())
		return next();
	res.redirect('/');
}
