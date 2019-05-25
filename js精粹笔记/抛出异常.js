let add = function(a, b) {
	if (typeof a !== "number" || typeof b !== "number") {
		// exception包含name，message属性，也可以扩充其他属性
		throw {
			name: "Type Error",
			message: "add needs numbers"
		};
	}
	return a + b;
};

console.log(add(3, "k"));

let try_it = function() {
	try {
		// 在出错传递给catch语句
		add("sevent");
		// LEARN:e包含错误信息的对象
	} catch (e) {
		console.log(e.name + ":" + e.message);
	}
};
