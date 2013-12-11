
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index.html', { title: 'Express' });
};

exports.login = function(req, res){
    res.render('login.html', { title: 'login'});
};

exports.checkAccess = function(req, res, next) {
    if(!req.cookies || !req.cookies.bbt_user_email) {
        res.redirect('/login' + '?returnUrl=' + req.url);
        next();
    } else {
        next();
    }
};

exports.authenticate = function(req, res) {
    var email = req.body.email || '',
        password = req.body.password || '',
        returnUrl = req.body.returnUrl || '';

    if(true) {
        res.cookie('bbt_user_email', email);
        res.json({"code": 200, "message": "Login Success"});
    } else {
        res.json({"code": 500, "message": "Login Fail"});
    }
};