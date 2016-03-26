// USERS MODEL

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// UserSchema
var UserSchema = new mongoose.Schema({
	name:String,
	// creating association to APPOINTMENT model
	appointments: [{type: Schema.Types.ObjectId, ref:'Appointment'}]
});


mongoose.model('User', UserSchema);