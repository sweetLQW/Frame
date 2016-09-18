define(function(require,exports,module){
	var sort = require("sort");//引入sort模块
	var arr = ["a","h","c"];
	function mycount(){
		var result = sort.mysort(arr);
		for(var i in result){
			console.log(result[i]);
		}
		// return 2;
	}
	module.exports = {
		mycount:mycount
	}
})