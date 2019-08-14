// 函数从右至左执行
function pipe(...fns) {
	return function(x) {
		return fns.reduce(function(arg, fn) {
			return fn(arg);
		}, x);
	};
}

let str = "jspool";

function stringToUpper(str) {
	return str.toUpperCase();
}

function stringReverse(str) {
	return str
		.split("")
		.reverse()
		.join("");
}

function stringToArray(str) {
	return str.split("");
}

let toUpperAndReverse = pipe(
	stringToUpper,
	stringToArray
);
let result = toUpperAndReverse(str);
console.log("result", result);
