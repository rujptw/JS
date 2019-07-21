// 扩充构造函数原型
var Mammal = function(name) {
	this.name = name;
};

Mammal.prototype.get_name = function() {
	console.log(this.name);
	return this.name;
};
Mammal.prototype.says = function() {
	return this.saying || "";
};

let myMammal = new Mammal("herb the Mammal");
let name = myMammal.get_name();

let Cat = function(name) {
	this.name = name;
	this.saying = "meow";
};
console.log(Cat.prototype);

// 伪类继承,将Cat.prototype的原型修改为Mammal构造函数的实例，就继承了原型里的方法和属性
Cat.prototype = new Mammal();
Cat.prototype.purr = function(n) {
	var i = "";
	var s = "";
	for (let i = 0; i < n; i++) {
		if (s) {
			s += "-";
		}
		s += "r";
	}
	return s;
};
// get_name覆盖了Mammal原型上的方法
Cat.prototype.get_name = function() {
	return this.says() + " " + this.name + " " + this.says();
};

let myCat = new Cat("Henrietta");

let says = myCat.says();
// console.log(says);
let purr = myCat.purr(5);
// console.log(purr);

let catName = myCat.get_name();
// console.log(catName);

Function.prototype.method = function(name, func) {
	this.prototype[name] = func;
	return this;
};

// 相当于Cat.prototype = new Mammal()
Function.method("inherits", function(Parent) {
	this.prototype = new Parent();
	return this;
});

// 采用级联的方式构造Cat1函数对象，隐藏掉了一些细节需要返回this
let Cat1 = function(name) {
	this.name = name;
	this.saying = "meow";
}
	.inherits(Mammal)
	.method("purr", function(n) {
		var i = "";
		var s = "";
		for (let i = 0; i < n; i++) {
			if (s) {
				s += "-";
			}
			s += "r";
		}
		return s;
	})
	.method("get_name", function() {
		return this.says() + " " + this.name + " " + this.says();
	});

let myCat1 = new Cat1("Henrietta");

let says1 = myCat1.says();
console.log(says1);
let purr1 = myCat1.purr(5);
console.log(purr1);

let catName1 = myCat1.get_name();
console.log(catName1);

// 原型

var otherMammal = {
	name: "Herb the Mammal",
	get_name: function() {
		return this.name;
	},
	says: function() {
		return this.saying;
	}
};

var otherItem = Object.create(otherMammal);
otherItem.name = "Henrietta";
otherItem.saying = "meow";
otherItem.purr = n => {
	var i,
		s = "";
	for (let i = 0; i < n; i++) {
		if (s) {
			s += "-";
		}
		s += "r";
	}
	console.log("s", s);
	return s;
};
otherItem.get_name = () => {
	console.log(this.says + " " + this.name + " " + this.says);
	return this.says + " " + this.name + " " + this.says;
};
otherItem.purr(10);
otherItem.get_name();

// 函数化

let thirdMammal = function(spec) {
	var that = {};
	that.get_name = function() {
		return spec.name || "";
	};
	that.says = function() {
		return spec.saying || "";
	};
	return that;
};
let thirdCat = spec => {
	spec.saying = spec.saying || "meow";
	// 接收返回的that;
	var that = thirdMammal(spec);
	that.purr = function(n) {
		var i,
			s = "";
		for (let i = 0; i < n; i++) {
			if (s) {
				s += "-";
			}
			s += "r";
		}
		console.log("k", s);
		return s;
	};
	that.get_name = () => {
		console.log("SAYS", that.says() + " " + spec.name + " " + that.says());
		return that.says() + " " + spec.name + " " + that.says();
	};
	return that;
};

var thirdCatItem = thirdCat({ name: "Henrietta" });
thirdCatItem.purr(20);
thirdCatItem.get_name();

//处理父类方法
Object.prototype.method = function(name, func) {
	this.prototype[name] = func;
	return this;
};
Object.method("superior", function(name) {
	var that = this;
	var method = that[name];
	return function() {
		return method.apply(that, arguments);
	};
});

var coolCat = spec => {
	var that = thirdCat(spec);
	// 获取父类的方法
	var super_get_name = that.superior("get_name");
	that.get_name = n => {
		return "like " + super_get_name() + "baby";
	};
	return that;
};
var myCoolCat = coolCat({ name: "BIX" });
console.log(myCoolCat.get_name());
