var express=require('express');
var app=express();
var mongoClient=require('mongodb').MongoClient;
var db;
mongoClient.connect('mongodb://127.0.0.1:27017',function(err,client){
    if(err) throw err;
    db=client.db('Asignment');
});
const fs = require('fs');
let rawdata = fs.readFileSync('cities.json');
let data = JSON.parse(rawdata);
app.get('/addData',function(req,res){

    db.collection('cities').insert(rawdata,function(err,result){
        console.log("inserted");
    });

   
})
app.get('/state/:state/add/:city',function(req,res){
console.log(req.params.city);
db.collection("cities").update(
    { state: req.params.state},
    {
      $push: {
        name: {
           $each: [req.params.city]
        }
      } 
    } 
 )
});

app.get('/state/:state/remove/:city',function(req,res){
    console.log(req.params.city);
    db.collection("cities").update(
        { state: req.params.state },
        { $pull: { name: req.params.city} },
        { multi: true }
     )
});

app.listen(3000);