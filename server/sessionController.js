const Session = require('./sessionModel');

const sessionController = {};

sessionController.verifySession = (req, res) => {
  Session.findOne({cookieId: req.cookies.ssid}, (err, result) => {
    if(err || !result){
      return res.redirect('/signup');
    }
  //res.render(main page)
  });
};

sessionController.startSession = (req, res) => {
  session.save(function(error, session) {
    if(error) return res.render('/signup', {error: error});
    //res.render(main page)
  });
};

module.exports = sessionController;