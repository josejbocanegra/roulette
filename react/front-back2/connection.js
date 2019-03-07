function connect(callback){

	const MongoClient = require("mongodb").MongoClient;
	const url = "mongodb://localhost:27017";
	const client = new MongoClient(url, {useNewUrlParser: true });

	client.connect(errClient=>{
		if(errClient!==null) 
			console.log("Error while connecting to mongodb: ", errClient);	
		
		//console.log("Connected to mongodb");
		
		const db = client.db("dbEmploymentApp");

		const collection = db.collection("joboffers");

		callback(client, collection);

	});
}

function getUpdates(callback){

	connect( (client, collection)=>{
		const changeStream = collection.watch();
		changeStream.on('change', next => {
			callback("la bd cambió");
		});
	});
}

function getJobOffers(callback){
	
	connect( (client, collection) =>{
		collection.find({}).toArray(function(errDatabase, docs) {
			if(errDatabase!==null)
				console.log("Error while getting the collection", errDatabase);
		
			//console.log("Docs: ", docs);
		
			callback(docs);
		
			client.close();
		});

	});
}

function createOffer(offer){
	
	connect( (client, collection) =>{
		collection.insertOne(offer);
		client.close();
	});
}

module.exports = { connect, getJobOffers, createOffer};