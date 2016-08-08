var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var bloodGroupSchema = new Schema({
	name: {type: String, required: true, unique: true}
});

var BloodGroup = mongoose.model('bloodgroup', bloodGroupSchema);

module.exports = BloodGroup;
