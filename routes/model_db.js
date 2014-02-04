var mongoose = require( 'mongoose' );
var Schema   = mongoose.Schema;

var Model = new Schema({
    name : String,
    surname : String,
    age : Number
});

//To use the model I created a variable regModel:
var regModel = mongoose.model( 'Model_name', Model );

mongoose.connect( 'mongodb://localhost/db1' );