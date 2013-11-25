var User = require('../model/User.js');
var UserWeight = require('../model/Weight.js');
var UserDao = require('../dao/UserDao.js');
var UserWeightDao = require('../dao/UserWeightDao.js');

/*
 * GET users listing.
 */

exports.list = function(req, res){
  res.send("respond with a resource");
};

// create User Form
exports.createForm = function (req, res) {
	res.render('user/form', {title:'create User Form'});
};

// create User
exports.create = function (req, res) {
	var body = req.body,
		id = body.id,
		password = body.password,
		nickName = body.nickName,
		user = User;
	
	if (id && password) {
		if (!nickName) {
			nickName = id;
		}
		
		user.setUser(id, password, nickName);
		
		UserDao.insert(user, function(opt) {
			if (opt) {
				if (opt.code == 200) {
					return res.redirect('/');
				}
			}
		});
	}
};

// join user
exports.join = function (req, res) {
	var body = req.body,
	id = body.id,
	password = body.password,
	user = User;
	
	if (id && password) {
		UserDao.findUser(id, password, function (opt) {
			if (opt && opt.code == 200) {
				UserWeightDao.findByUserId(id, function (opt) {
					res.render('user/weight', {code:200,userId:id, data:opt.result});
				});
			} else {
				res.render('index', {title: 'Please Sign in', message:'your id or password is not correct. please check Infomation'});
			}
		});
	}
};

// save user weight
exports.saveWeight = function (req, res) {
	var body = req.body,
		userId = body.userId,
		weight = body.weight,
		regDateTime = new Date(),
		userWeight = UserWeight;
	
	if (userId && weight) {
		userWeight.setWeight(userId, weight, regDateTime, '');
		UserWeightDao.insert(userWeight, function (opt) {
			if (opt && opt.code == 200) {
				res.json({code:opt.code, message:opt.message, content:opt.content});
			}
		});
	}
};