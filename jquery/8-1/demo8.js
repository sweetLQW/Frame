//方法二
function $(selector){
	return $.prototype.init(selector);
}
$.prototype = {
	init:function(selector){
		this.dom = document.querySelectorAll(selector);
		return this ;
	},
	click:function(fun){
		for(var i=0;i<this.dom.length;i++){//当dom是一个数组时，用for循环遍历数组在执行对应事件
			this.dom[i].addEventListener("click",fun,false);
		}
	},
	attr:function(){
		if(arguments.length === 1){
			return this.dom[0][arguments[0]]
		}else if(arguments.length === 2){
			for(var i=0;i<this.dom.length;i++){
				this.dom[i][arguments[0]] = arguments[0];
			}
		}
	}
}
//等同于上面4-13行的代码
// $.prototype.init = function(selector){
// 		this.dom = document.querySelectorAll(selector);
// 		return this ;
// }
// $.prototype.click = function(fun){
// 		for(var i=0;i<this.dom.length;i++){//当dom是一个数组时，用for循环遍历数组在执行对应事件
// 			this.dom[i].addEventListener("click",fun,false);
// 		} 
