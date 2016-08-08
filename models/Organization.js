var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var organizationSchema = new Schema({
	name: {type: String, required: true},
	description: {type: String, required: true},
	login: {type: Schema.ObjectId, required: true, ref: "login"},
	license: {type: String, required: true}
});

var Organization = mongoose.model('organization', organizationSchema);



module.exports = Organization;
