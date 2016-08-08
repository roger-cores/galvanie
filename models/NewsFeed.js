var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var newsFeedSchema = new Schema({
	requestorBloodBank: {type: Schema.ObjectId, ref: "bloodbank", required: true},
	requestedBloodGroup: {type: Schema.ObjectId, ref: "bloodgroup", required: true},
	active: {type: Boolean, required: true},
	requestedDate: {type: Date, required: true},
	expiry: {type: Date, required: true},
	users: [{
		user: {type: Schema.ObjectId, ref: 'user', required: true},
		done: {type: Boolean, default: false},
		accepted: {type: Boolean, default: false},
		doneDate: {type: Date, required: false}
	}]
});

var NewsFeed = mongoose.model('newsfeed', newsFeedSchema);

module.exports = NewsFeed;
