var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var stateSchema = new Schema({
	name: {type: String, required: true, unique: true},
	//country: {type: ObjectId, ref:'country', required: true}
});

var State = mongoose.model('state', stateSchema);

module.exports = State;
