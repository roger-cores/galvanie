var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
var addressObj = require('./address');

var bloodBankSchema = new Schema({
	name: {type: String, required: true},
	organization: {type: ObjectId, required: true, ref: 'organization'},
	login: {type: ObjectId, required: false, ref: 'login'},
	license: {type: String, required: true},
	verified: {type: Boolean, default: false},
	loginActive: {type: Boolean, default: false},
	copyAddress: {type: Boolean, default: false},
	address: addressObj
});

var BloodBank = mongoose.model('bloodbank', bloodBankSchema);



module.exports = BloodBank;
