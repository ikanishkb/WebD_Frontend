// const mongodb = require('mongodb');

// const MongoClient = mongodb.MongoClient;

// let _db;

// const mongoConnect = (callback) =>{
//     MongoClient.connect(
//         'mongodb+srv://admin:admin@coding-xte7u.mongodb.net/test?retryWrites=true&w=majority'
//     ).then(client=>{
//         console.log('connected');
//         _db=client.db();
//         callback(client);
//     }).catch(err=>{
//         console.log(err);
//     });
// };

// constgetDb = () =>{
//     if(_db){
//         return _db
//     }
//     throw "No database connected";
// }

// exports.mongoConnect = mongoConnect;
// exports.getDb = constgetDb;

const mongodb = require("mongodb")
var animalSchema = new Schema({ title: String, }, {type: String });