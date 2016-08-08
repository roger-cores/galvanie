var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var userSchema = new Schema({
	fname: {type: String, required: true},
	mname: {type: String, required: true},
	lname: {type: String, required: true},
	gender: {type: String, required: true},
	login: {type: Schema.ObjectId, ref: "login", required: true},
	dob: {type: Date, required: true},
	bloodGroup: {type: Schema.ObjectId, ref: "bloodgroup", required: true},
	timeToRecover: {type: Number, required: false},
	lastDonated: {type: Date, required: false},
	referalCode: {type: String, required: false}
});

var User = mongoose.model('user', userSchema);



User.schema.path('gender').validate(function(value){
	return /Male|Female|Other/.test(value);
}, 'Invalid Gender');

module.exports = User;
