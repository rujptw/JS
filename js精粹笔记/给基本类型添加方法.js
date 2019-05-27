//给函数原型添加method方法,用于在Function的原型上添加方法
Function.prototype.method = function(name, func) {
	this.prototype[name] = func;
	return this;
};

Number.method("integer", function() {
	return Math[this < 0 ? "ceiling" : "floor"](this);
});
