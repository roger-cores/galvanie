var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

module.exports = {
  businessBlockName: {type: String, required: false},
  streetAddress: {type: String, required: false},
  city: {type: Schema.ObjectId, ref: "city", required: false},
  state: {type: Schema.ObjectId, ref: "state", required: false},
  pinCode: {type: Number, required: false},
  lat: {type: Number, required: false},
  lon: {type: Number, required: false}
}
