var express = require('express');
var router = express.Router();

function getElements(callback){
	const MongoClient = require("mongodb").MongoClient;
	const url = "mongodb://localhost:27017";
	const client = new MongoClient(url, {useNewUrlParser: true });

	client.connect(errCn=>{
		if(errCn!==null) 
			console.log("Error while connecting to mongodb: ", errCn);	
		
		console.log("Connected to mongodb");
		
		const db = client.db("neptuno");

		const collection = db.collection("collection");
		collection.find({}).toArray(function(errDb, docs) {
			if(errDb!==null)
				console.log("error en find:", errDb);
			console.log("estos son los docs: ", docs);
			callback(docs);
			client.close();
		});

	});
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/proveedores', function(req, res, next) {
	//var provs = [{"name": "alfa"}, {"name": "beta"}, {"name": "gamma"}, {"name": "delta"}];
  	//res.render('index', { title: 'Express' });
  	//res.send(provs);
  	getElements(data =>{
  		console.log("Found the following records", data);
  		res.send(data);
  	});
});

module.exports = router;
