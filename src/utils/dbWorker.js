var MongoClient = require('mongodb').MongoClient;
var Server = require('mongodb').Server;

const PORT = 27017;
const SERVER = 'localhost';
const DB_NAME = 'rate';

let db;

exports.connect = function (callback){
    MongoClient.connect(new Server(SERVER, PORT),  function(err, database) {
        if(err) throw err;
        
        db = database;
        console.log("connected to mongo!")
        callback();
    });
}