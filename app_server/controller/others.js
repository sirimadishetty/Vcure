module.exports.about = function(req, res){
    res.render('generic-text', { title: 'About' });
};
/* GET 'signin' page */
module.exports.signin = function(req, res){
    res.render('signin', { title: 'signin' });
    content: 'MovieTime is a website where you can book your favourite movie tickets online without standing in line at the theatres.You can enjoy watching your favourite actor/actress perfrom on screen and watch their new movies by booking through this app.'
  }
  /* GET 'register' page */
  module.exports.register = function(req, res){
    res.render('register', { title: 'register' });
    content: 'MovieTime is a website where you can book your favourite movie tickets online without standing lines at theatres.You can enjoy watching your favourite actor/actress perfrom on screen and watch their new movies by booking through this app.'
  }
  