var express = require('express');
var router = express.Router();

var conn = require ("../connection");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/createOffer', function(req, res) {
	//console.log("Creating an offer");

	let offer = {
		"name": req.body.name,
		"company": req.body.company,
		"salary": req.body.salary ,
		"city": req.body.city
	};

	conn.createOffer(offer);
	res.send("Offer created");
});

router.get('/jobOffers', function(req, res) {
  //Incluya acá la conexión a la BD, obtenga la colección y retorne un JSON a la vista
	conn.getJobOffers(data =>{
		//console.log("Found the following records", data);
		res.send(data);
	});
}); 

module.exports = router;
