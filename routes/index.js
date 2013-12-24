
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