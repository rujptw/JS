//给函数原型添加method方法,用于在Function的原型上添加方法,下面也是一样的
Function.prototype.method = function(name, func) {
	// 判断原型链上是否已有这个方法
	if (!this.prototype[name]) {
		this.prototype[name] = func;
		return this;
	}
};

// 取整
Number.method("integer", function() {
	return Math[this < 0 ? "ceiling" : "floor"](this);
});

// 去除空格
String.method("trim", function() {
	return this.replace(/^\s+|\s+$/g, "");
});
