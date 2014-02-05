var mongoose = require( 'mongoose' );
//To use the model I created a variable regModel
var regModel = mongoose.model( 'Model_name');


exports.reg = function (req, res){
  var responseText;
  if(req.session.lastPage)
  responseText = 'Last page was: ' + req.session.lastPage + '. ';
  else
  responseText = 'You\'re Awesome';

  req.session.lastPage = '/awesome';
  res.send(responseText);
};

exports.search = function (req, res){
  regModel.find(function (err, entries) {
    if (!err) {
      res.render( 'search', {
          title : 'RestAPI System with Mongoose and Node/Express',
          footer : '@2014 by M.A.P.S Powered by Node.js, Express, MongoDB '
      });
    } else {
      console.log(err);
    }
  });
};