var mongoose = require( 'mongoose' );
//To use the model I created a variable regModel
var regModel = mongoose.model( 'Model_name');

exports.index = function ( req, res ){
  regModel.find( function ( err, entries, count ){
    res.render( 'index', {
        title : 'restAPI System with Mongoose and Node/Express',
        entries : entries
    });
  });
};

// exports.create = function ( req, res ){
//   new Comment({
//     username : req.body.username,
//     content : req.body.comment,
//     created : Date.now()
//   }).save( function( err, comment, count ){
//     res.redirect( '/' );
//   });
// };


exports.getAll = function (req, res){
  regModel.find(function (err, entries) {
    if (!err) {
      res.send(entries);
    } else {
      console.log(err);
    }
  });
};

exports.postnew = function (req, res){
  var entry;
  console.log("POST: ");
  console.log(req.body);
  entry = new regModel({
    title : req.body.title,
    description : req.body.description,
    created : Date.now(),
  });
  entry.save(function (err) {
    if (!err) {
      console.log("created");
      res.redirect('/');
    } else {
      console.log(err);
      res.redirect('/');
    }
  });
};

exports.getById = function (req, res){
  regModel.findById(req.params.id, function (err, entry) {
    if (!err) {
      res.send(entry);
    } else {
      console.log(err);
    }
  });
};

exports.putById = function (req, res){
  regModel.findById(req.params.id, function (err, entry) {
    entry.title = req.body.title;
    entry.description = req.body.description;
    entry.created = Date.now();
    entry.save(function (err) {
      if (!err) {
        console.log("updated");
      } else {
        console.log(err);
      }
      res.send(entry);
    });
  });
};

exports.deleteById = function (req, res){
  //console.log(req);
  //hay que fijarse en si es QUERY o UN Param
  regModel.findById(req.query.id, function (err, entry) {
    entry.remove(function (err) {
      if (!err) {
        console.log("removed");
        res.redirect('/');
      } else {
        console.log(err);
        res.redirect('/');
      }
    });
  });
};