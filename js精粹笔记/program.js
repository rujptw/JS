document.write("goodBye");

// 第四章会解释method方法的用法
Function.prototype.method = function(name, func) {
	this.prototype[name] = func;
	return this;
};
