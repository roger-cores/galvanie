
var userVerifier = function(loginId, expected, models, promise){
  models.ID.findOne({_id: loginId}, function(err, user){
    if(expected instanceof Array){
      console.log('its an array');
      for(var i=0; i<expected.length; i++){
        if(user && (user.type == expected[i])) {promise(true); return;}
      }
      promise(false);
    }
    else {
      console.log('its not an array');
      if(user && (user.type == expected)) promise(true);
      else promise(false);
    }

  });
}

module.exports = userVerifier;
