var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var bloodGroupDonationMatrixSchema = new Schema({
	requestorBloodGroup: {type: Schema.ObjectId, ref: "bloodgroup", required: true},
	donorBloodGroup: {type: Schema.ObjectId, ref: "bloodgroup", required: true}
});
bloodGroupDonationMatrixSchema.index({requestorBloodGroup: 1, donorBloodGroup: 1}, {unique: true});
var BloodGroupDonationMatrix = mongoose.model('bloodgroupdonationmatrix', bloodGroupDonationMatrixSchema);

module.exports = BloodGroupDonationMatrix;
