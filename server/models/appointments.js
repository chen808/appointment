// APPOINTMENTS MODEL

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// AppointmentSchema
var AppointmentSchema = new mongoose.Schema({
	date:String,
	time:String,
	complain:String,
	name:String,
	// belongs to USERS model
	_user: {type: Schema.Types.ObjectId, ref:'User'}
});


mongoose.model('Appointment', AppointmentSchema);