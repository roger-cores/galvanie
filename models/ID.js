var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');
var addressObj = require('./address');


var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

// define the schema for our user model
var userSchema = mongoose.Schema({


    address: addressObj,
    mobile: {type: Number, unique: false, required: false},

    email        : {type: String, unique: true, required: true},
    password     : {type: String, unique: false, required: true},
    type         : {type: String, required: true},

    facebook         : {
        id           : String,
        token        : String,
        email        : String,
        name         : String
    },
    google           : {
        id           : String,
        token        : String,
        email        : String,
        name         : String
    }

});



// methods ======================
// generating a hash
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

// create the model for users and expose it to our app
var Login = mongoose.model('login', userSchema);
Login.schema.path('type').validate(function(value){
	return /USER|ORGANIZATION|BLOODBANK/.test(value);
}, 'Invalid LoginType');
module.exports = Login;
