/**
 * Dieter index file
 */

exports.dieter = function(req, res){
	res.render('dieter', { title: 'BBT-Dieter!' });
};

exports.userlist = function(db) {
    return function(req, res) {
        var collection = db.get('usercollection');
        collection.find({},{},function(e,docs){
            res.render('userlist', {
                "userlist" : docs
            });
        });
    };
};

exports.dieterlist = function(db){
	return function(req, res) {
		var userName = req.query.username;
		
		if (userName.length < 1) {
			res.redirect("dieter");
		}
		else {
			var collection = db.get('dieterlist');
	        collection.find({"username" : userName},{},function(e,docs){
	            res.render('dieterlist', {
	            	"username": userName,
	                "dieterlist" : docs
	            });
	        });
		}
	};
};

exports.adduser = function(db) {
    return function(req, res) {
        // Get our form values. These rely on the "name" attributes
        var userName = req.body.username;
        var userEmail = req.body.useremail;

        // Set our collection
        var collection = db.get('usercollection');

        // Submit to the DB
        collection.insert({
            "username" : userName,
            "email" : userEmail
        }, function (err, doc) {
            if (err) {
                // If it failed, return error
                res.send("There was a problem adding the information to the database.");
            }
            else {
                // If it worked, forward to success page
            	res.redirect("dieterlist?username=" + userName);
                // And set the header so the address bar doesn't still say /adduser
//                res.location("userlist");
                
            }
        });
    };
};

exports.addweight = function(db) {
    return function(req, res) {
    	var userName = req.body.username;
        var weight = req.body.weight;

        // Set our collection
        var collection = db.get('dieterlist');

        // Submit to the DB
        collection.insert({
            "username" : userName,
            "weight" : weight
        }, function (err, doc) {
            if (err) {
                // If it failed, return error
                res.send("There was a problem adding the information to the database.");
            }
            else {
            	res.redirect("dieterlist?username=" + userName);
            }
        });
    };
};

