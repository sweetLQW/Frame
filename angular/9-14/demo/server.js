var express = require("express");
var path = require("path");
var datahandle = require("./mymodules/datahandle");
var app = express();
app.use(express.static(path.join(__dirname,"public")));
app.listen(3000,function(){
    console.log("服务器已启动");
})
app.get("/finddata",function(req,res){
	datahandle.finddata(function(data){
		res.setHeader("Access-Control-Allow-Origin":"*");//设置跨域响应头
		res.send(data);
	})
})
app.post("/insertdata",function(req,res){
	datahandle.insertdata(req.query,function(data){
		res.send(data);
	})
})
app.post("/removedata",function(req,res){
	var name = {name:req.query.name};
	datahandle.removedata(name,function(data){
		res.send(data);
	})
})