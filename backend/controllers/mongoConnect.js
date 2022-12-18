// const { MongoClient, ServerApiVersion } = require("mongodb");
// const DB_URI_ATLAS = "mongodb+srv://boyoung:7167@cluster0.uae2ehq.mongodb.net/?retryWrites=true&w=majority";
// const uri = DB_URI_ATLAS;
// const client = new MongoClient(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   serverApi: ServerApiVersion.v1,
// });
// module.exports = client;

var MongoClient = require("mongodb").MongoClient;

var uri =
  "mongodb://boyoung:7167@ac-mpub5sp-shard-00-00.uae2ehq.mongodb.net:27017,ac-mpub5sp-shard-00-01.uae2ehq.mongodb.net:27017,ac-mpub5sp-shard-00-02.uae2ehq.mongodb.net:27017/?ssl=true&replicaSet=atlas-gt4mk0-shard-0&authSource=admin&retryWrites=true&w=majority";

const client = new MongoClient(uri);
// MongoClient.connect(uri, function (err, client) {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

module.exports = client;
