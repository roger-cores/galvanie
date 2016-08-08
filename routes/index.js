var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next){
  res.render('index', {});
});

router.get('/getinfo', function(req, res, next){
  res.status(200).send({info: 'this is information'});
})

router.post('/postinfo', function(req, res, next){
  res.status(201).send({info: 'object created'});
})

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Log in', login: true });
});

router.get('/register', function(req, res, next){
  res.render('register', { title: 'Register' });
});

router.get('/register-emergency', function(req, res, next){
  res.render('emergency', {title: 'Emergency Register'});
});

router.get('/register-org', function(req, res, next){
  res.render('register-org', {title: 'Register Organization'});
});

router.get('/register-user', function(req, res, next){
  res.render('reg-user', {title: 'Become a donor'});
});

router.get('/org-home', function(req, res, next){
  res.render('org-home', {title: 'Organization'});
});


router.get('/main', function(req, res, next){
  res.render('main', {title: 'Galvanie'});
});

router.get('/bb-home', function(req, res, next){
  res.render('bb-home', {title: 'Galvanie'});
});

router.get('/org-home/bloodbank', function(req, res, next){
  res.render('bb-home-full', {title: 'Galvanie'});
});
router.get('/bb-storage', function(req, res, next){
  res.render('bb-storage', {title: 'Galvanie'});
});
router.get('/bb-ads', function(req, res, next){
  res.render('bb-ads', {title: 'Galvanie'});
});
router.get('/bb-req', function(req, res, next){
  res.render('bb-req', {title: 'Galvanie'});
});
router.get('/user-home', function(req, res, next){
  res.render('user-home', {title: 'Galvanie'});
});
router.get('/ad-info', function(req, res, next){
  res.render('ad-info', {title: 'Galvanie'});
});

module.exports = router;
