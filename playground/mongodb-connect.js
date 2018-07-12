// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
   if(err){
      return console.log('Unable to connect');
   }
   console.log('Connect to server');
   const db = client.db('TodoApp');

   db.collection('Todos').insertOne({
       text:'Somenthing to do',
       completed:false
   },(err,result)=>{
       if(err){
           return  console.log('unable to connect to todo',err);
       }
       console.log(JSON.stringify(result.ops,undefined,2));
   });

   db.collection('users').insertOne({
       name:'shubham',
       age:21,
       location:'India'
   },(err,result)=>{
       if(err){
           return console.log('unable to connect',err);
       }
       console.log(JSON.stringify(result.ops,undefined,2));
   });

   client.close();
});
