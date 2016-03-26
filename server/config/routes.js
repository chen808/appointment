// ROUTES JS

// require appointment controller
var appointment = require('./../controllers/appointments.js');





module.exports = function(app){

	// GETS ===========================================
	app.get('/getAppoints', function(req, res){
		appointment.getAppoints(req, res)
	});



	// POSTS ===========================================
	app.post('/addApp', function(req, res){
		appointment.addAppoints2(req, res)
	});




};