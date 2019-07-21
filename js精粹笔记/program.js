document.write("goodBye");

// 第四章会解释method方法的用法
// 通过给基本类型添加方法，能够是基本类型下的所有对象可用
Function.prototype.method = function(name, func) {
	this.prototype[name] = func;
	return this;
};
