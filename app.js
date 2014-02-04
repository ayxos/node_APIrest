/**
 * Module dependencies.
 */

require( './routes/model_db' ); //for DB mongoose.


var express = require('express');
var routes = require('./routes'); // Para las funciones con la DB
// var user = require('./routes/user');
var http = require('http');
var path = require('path');


var app = express();

// all environments
app.set('port', process.env.PORT || 8001);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));



// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.getAll);
app.post('/api/entries', routes.postnew);
app.get('/api/entries/:id', routes.getById_complex);
app.get('/api/:id', routes.getById);
app.put('/api/entries/:id', routes.putById);
//el delete y put deberian hacerse con un AJAX, para proximamente...se hace una Ñapa con un GET
app.delete('/api/entries/:id', routes.deleteById);
app.get('/api/del/', routes.deleteById);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
