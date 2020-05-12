const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");

const url = "mongodb://localhost:27017";

const dbName = "reactivedb";

const client = new MongoClient(url, { useUnifiedTopology: true });

const getDatabase = (callback) => {
  client.connect(function (err) {
    assert.equal(null, err);
    console.log("Connected successfully to server");

    const db = client.db(dbName);

    callback(db, client);
  });
};

const findDocuments = function (db, callback) {
  const collection = db.collection("reactive");
  collection.find({}).toArray(function (err, docs) {
    assert.equal(err, null);
    callback(docs);
  });
};

const listeningForChanges = (db) => {
  console.log("In listening...");
  const cursor = db.collection("reactive").watch();
  cursor.on("change", (data) => {
    console.log("Collection changing...");
  });
};

exports.getDatabase = getDatabase;
exports.findDocuments = findDocuments;
exports.listeningForChanges = listeningForChanges;
