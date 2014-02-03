var mongoose = require( 'mongoose' );
//To use the model I created a variable regModel
var regModel = mongoose.model( 'Model_name');

exports.index = function ( req, res ){
  regModel.find( function ( err, entries, count ){
    res.render( 'index', {
        title : 'RestAPI System with Mongoose and Node/Express',
        footer : '@2014 by M.A.P.S Powered by Node.js, Express, MongoDB ',
        entries : entries
    });
  });
};

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
  console.log("POST: " + req.params + req.body + req.query);
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
    var frase = entry.toString();
    var subarr = frase.split(': ');
    //Final array
    var keys = new Array();
    var values = new Array();

    for (var i=0;i<subarr.length;i++){
      var clave = subarr[i].substring(subarr[i].lastIndexOf(' ') + 1);
      clave = clave.trim();
      if (i < subarr.length - 1){
        var valor  = subarr[i+1].substring(0, subarr[i+1].indexOf(','));
      }

      if (i == subarr.length - 2){
        valor = subarr[subarr.length - 1].substring(0, subarr[i + 1].lastIndexOf('}') - 1);
      }
      valor = valor.trim();
      console.log(i + ' : ' + valor);

      var vsExprReg = /^[a-z\sáéíóúñ.,_\-\&\/]+$/i;
      if (vsExprReg.test(clave)) {
        keys[i] = clave;
        values[i] = valor;
      }
    }

    if (!err) {
      res.render( 'api', {
          title : 'RestAPI',
          footer : 'RestAPI @2014 by M.A.P.S Powered by Node.js, Express, MongoDB ',
          id : entry.id,
          keys : keys,
          values : values
      });
    } else {
      console.log(err);
    }
  });
};

exports.putById = function (req, res){
  console.log(req.body);
  regModel.findById(req.params.id, function (err, entry) {
    for (key in req.body){
      entry[key] = req.body[key];
    }
    entry.save(function (err) {
      if (!err) {
        console.log("updated");
        //Es imprescindible devolver datos, en este caso las llaves
        res.send(201, {});
      } else {
        console.log(err);
        res.send(500, "updated error");
      }
      // res.send(entry);
    });
  });
};

exports.deleteById = function (req, res){
  // console.log(req);
  console.log('DELETED: ' + req.params.id);
  //hay que fijarse en si es QUERY o UN Param
  regModel.findById(req.params.id, function (err, entry) {
    entry.remove(function (err) {
      if (!err) {
        console.log("removed");
        res.send(201, "Removed: " + req.params.id);
      } else {
        console.log(err);
        res.send(500, "removed error");
      }
    });
  });
};