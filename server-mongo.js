var mongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, {useNewUrlParser: true},
function (err, db) {
	var dbo = db.db("accounts");
	var account = {userName: "splitz", password: "password123"};
	
	dbo.collection("accounts").insertOne(account,
	function(err, res){
		console.log("Added Account to the DB");
		db.close();
	});
});
