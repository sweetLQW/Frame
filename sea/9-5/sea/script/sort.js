define(function(require,exports,module){
	function mysort(arr){
		for(var i = arr.length;i>=2;i--){
			for(var j = 0;j<i-1;j++ ){
				if(arr[j]>arr[j+1]){
					var temp = arr[j];
					arr[j] = arr[j+1];
					arr[j+1] = temp;
				}	
			}
		}
		return arr;
	}
	module.exports = {
		mysort:mysort
	}
})