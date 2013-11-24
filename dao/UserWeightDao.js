var mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost/dieter');

var Schema = mongoose.Schema;

var WeightSchema = new Schema({
	userId : String,
	weight : Number,
	regDateTime : Date,
	goalWeight : Number
});

function insert (data, callback) {
	var WeightModel = mongoose.model('weight', WeightSchema),
		weight = new WeightModel(data);
	weight.save(function (err) {
		if (!err) {
			callback({
				code : 200,
				message : 'success insert weight by userId',
				content : '<li>weight : '+data.weight+', regDate : '+data.regDateTime+'</li>'
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
	var WeightModel = mongoose.model('weight', WeightSchema);
	
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