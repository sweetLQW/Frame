var mongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/managementSystem";
function findData(next){
    mongoClient.connect(url,function(err,db){
        if(err){
            console.log(err);
        }else{
            db.collection("students").find().toArray(function(err,docs){
                if(err){
                    console.log(err);
                }else{
                    next(docs);
                    db.close();
                }
            })
        }
    })
}
function insertData(data,next) {
    mongoClient.connect(url,function(err,db){
        db.collection("students").insertOne(data,function(){
            findData(function(data){
                next(data);
            })
            db.close();
        });
    })
}
function updateData(condition,data,next) {
	console.log(condition)
	console.log(data)
    mongoClient.connect(url,function(err,db){
        db.collection("students").updateOne(condition,data,function(){
            findData(function(data){
                next(data);
            })
            db.close();
        });
    })
}
function removeData(option,next) {
    mongoClient.connect(url,function(err,db){
        db.collection("students").removeOne(option,function(){
            findData(function(data){
                next(data);
            })
            db.close();
        });
    })
}

module.exports ={
    finddata:findData,
    insertdata:insertData,
    updatedata:updateData,
    removedata:removeData
}
