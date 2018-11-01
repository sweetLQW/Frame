var cat = {
	name:"mimi",
	age:5,
	sayName:function(){
		alert(this.name)
		var a= this.name;
		return this;
	},
	sayHello:function(){
		var information="大家好，我是" + this.name + "我今年" + this.age + "岁了。" 
		alert(information);
		return this;
	},
	eat:function(food){
		var eat = "我喜欢吃" + food;
		alert(eat);
		return this;
	},
	count:function(num1,num2,sign){
		switch(sign){
			case "+": var result = Number(num1) + Number(num2);break;
			case "-": var result = Number(num1) - Number(num2);break;
			case "*": var result = Number(num1) * Number(num2);break;
			case "/": var result = Number(num1) / Number(num2);break;
		}
		var count = num1 + sign + num2 + "的计算结果是：" + result;
		alert(count);
	}
}