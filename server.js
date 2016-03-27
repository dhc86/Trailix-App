var express = require('express');
var app = express();
// var mongojs = require('mongojs');
// var db = mongojs('trailers', ['trailers']);
var bodyParser = require('body-parser');

// app.get('/', function(req, res){

//   res.send("Hello world from server side!");

// });

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

// app.get('/trailers', function(req, res){
//   console.log("Get request received in server");
//   db.trailers.find(function(err, docs){
//     res.json(docs); 
//     // console.log(docs);
//   });
// });

// app.post('/trailers', function(req, res){
//   console.log(req.body);
//   db.trailers.insert(req.body, function(err, doc){
//     res.json(doc); 
//   });
// });

// app.delete('/trailers/:id', function(req, res) {
//   var id = req.params.id;
//   console.log("id to be deleted: " + id);
//   db.trailers.remove({_id: mongojs.ObjectId(id)}, function(err, doc){
//     res.json(doc);
//   });
// });



// app.get('/contactlist', function(req, res){
//   console.log("Get request received in server -----WHat? this is from contactlist");

//   db.contactlist.find(function(err, docs){
//     res.json(docs); 
//   });
// });

// app.post('/contactlist', function(req, res){
//   console.log(req.body);
//   db.contactlist.insert(req.body, function(err, doc){
//     res.json(doc); 
//   });
// });


// app.delete('/contactlist/:id', function(req, res) {
//   var id = req.params.id;
//   console.log("id to be deleted: " + id);
//   db.contactlist.remove({_id: mongojs.ObjectId(id)}, function(err, doc){
//     res.json(doc);
//   });
// });

// app.get('/contactlist/:id', function(req, res) {
//   var id = req.params.id;
//   console.log(id);
//   db.contactlist.findOne({_id: mongojs.ObjectId(id)}, function(err, doc){
//     res.json(doc);
//   });
// });

// app.put('/contactlist/:id', function(req, res){
//   var id = req.params.id;
//   console.log("name from server: " + req.body.name);
//   db.contactlist.findAndModify({ query: {_id: mongojs.ObjectId(id)},

//     update: {$set: {name: req.body.name, email: req.body.email, number: req.body.number}},
//     new: true}, function(err, doc){
//       res.json(doc);
    

//   });
// });

app.listen(3000);
console.log("Server running in Port 3000");


