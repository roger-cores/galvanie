var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var bloodBankStorageSchema = new Schema({
	bloodBank: {type: ObjectId, ref:'bloodbank', required: true},
	bloodGroup: {type: ObjectId, ref:'bloodgroup', required:true},
	units: {type: Number, required: true},
	threshold: {type: Number, required: true}
});

bloodBankStorageSchema.index({ bloodBank: 1, bloodGroup: 1}, { unique: true });

var BloodBankStorage = mongoose.model('bloodbankstorage', bloodBankStorageSchema);



module.exports = BloodBankStorage;
