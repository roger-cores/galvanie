var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
var addressObj = require('./address');

var requestSchema = new Schema({
	requestorLogin: {type: Schema.ObjectId, ref: "login", required: true},
	requestedBloodGroup: {type: Schema.ObjectId, ref: "bloodgroup", required: true},
	active: {type: Boolean, required: true},
	requestedDate: {type: Date, required: true},
	deadline: {type: Date, required: true},
	fulfilled: {type: Boolean, required: true},
	address: addressObj,
	bedCode: {type: String, required: false},
	bloodBank: {type: Schema.ObjectId, ref: 'bloodbank'}
});

var Request = mongoose.model('request', requestSchema);

module.exports = Request;
