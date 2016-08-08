var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;
var Schema = mongoose.Schema;

var countrySchema = new Schema({
	name: {type: String, unique: true},
	states: [{type: Schema.ObjectId, ref: 'state'}]
});

var Country = mongoose.model('country', countrySchema);

module.exports = Country;

console.log(Country.schema.paths.states.options.type[0].ref);