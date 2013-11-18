var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var WeightSchema = new Schema({
	id : Number,
	userId : String,
	weight : Number,
	regDateTime : String,
	goalWeight : Number
});

function insert (data, callback) {
	var WeightModel = mongoose.model('weight_'+data.userId, WeightSchema),
		weight = new WeightModel(data);
	
	weight.save(function (err) {
		if (!err) {
			callback({
				code : 200,
				message : 'success insert weight by userId'
			});
		} else {
			callback({
				code : 500,
				message : 'fail insert weight by userId ' + err
			});
		}
	});
}

function findByUserId (userId, callback) {
	var WeightModel = mongoose.model('weight_'+userId, WeightSchema);
	
	WeightModel.find({userId:userId}).exec(function (err, docs) {
		if (!err) {
			callback({
				code : 200,
				message : 'success select weight by userId',
				result : docs
			});
		} else {
			callback({
				code : 500,
				message : 'fail select weight by userId ' + err,
				result : null
			});
		}
	});
}

exports.insert = insert;
exports.findByUserId = findByUserId;