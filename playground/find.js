const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
    if(err){
        return console.log('Unable to connect');
    }
    console.log('Connect to server');
    const db = client.db('TodoApp');

    // db.collection('Todos').find({_id:new ObjectID("5b46f4375ea29f23ebc03f2d")}).toArray().then((docs)=>{
    //     console.log('todos');
    //     console.log(JSON.stringify(docs,undefined,2));
    // },(err)=>{
    //     console.log(err);
    // });

    db.collection('Todos').find().count().then((count)=>{
        console.log(`count is ${count}`);
    },(err)=>{
        console.log(err);
    });



    client.close();
});
