//var seed = require('./seed.json');
var dbase = require('./dbase');
var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;
module.exports = function(models){





  for(var i = 0; i < dbase.clients.length; i++){
    new models.Client(dbase.clients[i]).save();
  }

  // for(var i = 0; i < dbase.states.length; i++){
  //   new models.State(dbase.states[i]).save();
  // }
  //
  // for(var i = 0; i < dbase.cities.length; i++){
  //   new models.City(dbase.cities[i]).save();
  // }



  var dumpGeographies = function(index){

    //console.log(index);

    models.State.findOne({name: dbase.geographies[index].state}, function(err, state){
      if(err) {return;}
      if(!state){
        var $id = ObjectId();
        new models.State({name: dbase.geographies[index].state, _id: $id}).save(function(err, state){
          //if(err) console.log(err);
          new models.City({name: dbase.geographies[index].city, state: $id}).save(function(err){
            //if(err)console.log(err);

            if(index < dbase.geographies.length-1) dumpGeographies(index+1);
          });


        });



      } else {
        new models.City({name: dbase.geographies[index].city, state: state._id}).save(function(err){
          //if(err) console.log(err);

          if(index < dbase.geographies.length-1) dumpGeographies(index+1);
        });


      }

    });
  }

  dumpGeographies(0);

  for(var i = 0; i < dbase.logins.length; i++){
    var id = new models.ID();
    id._id = dbase.logins[i]._id;
    id.email = dbase.logins[i].email;
    id.address = dbase.logins[i].address;
    id.mobile = dbase.logins[i].mobile;
    id.password = id.generateHash(dbase.logins[i].password);
    id.type = dbase.logins[i].type;
    id.save(function(err, login){

    });
  }

  for(var i = 0; i < dbase.bloodgroups.length; i++){
    new models.BloodGroup(dbase.bloodgroups[i]).save();
  }

  for(var i = 0; i < dbase.users.length; i++){
    new models.User(dbase.users[i]).save();
  }

  for(var i = 0; i < dbase.organizations.length; i++){
    new models.Organization(dbase.organizations[i]).save();
  }

  for(var i = 0; i < dbase.bloodbanks.length; i++){
    new models.BloodBank(dbase.bloodbanks[i]).save();
  }

  for(var i = 0; i < dbase.bloodgroupdonationmatrices.length; i++){
    new models.BloodGroupDonationMatrix(dbase.bloodgroupdonationmatrices[i]).save();
  }



}
