// APPOINTMENT CONTROLLER
var mongoose = require('mongoose');
var Appointments = mongoose.model('Appointment');


module.exports = (function(){

	return {

		getAppoints: function(req, res){
			Appointments.find({}, function(err, results){
				if(err){
					console.log('Error getting data');
				}
				else{
					res.json(results);

				}
			})
		},

		addAppoints2: function(req, res){
			Appointments.create(req.body, function(err, results){
				if(err){
					console.log('Error getting data');
				}
				else{
					res.json(results);

				}
			})
		}

	}


})(); // end module.exports
