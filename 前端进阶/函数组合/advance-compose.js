// 参数固定接收
// function compose(f,g){
//   return function(x){
//     return f(g(x))
//   }
// }

// 函数组合实现
// 不定参数接收

function compose(...fns) {
	return function(x) {
		return fns.reduceRight(function(arg, fn) {
			return fn(arg);
		}, x);
	};
}

// 计算字符串的字符数
// let str = "hello your reading about composition";

// let splitIntoSpaces = str => str.split(" ");
// let count = array => array.length;

// let countWords = compose(
//   splitIntoSpaces,
// 	count

// );

// let result = countWords;

// console.log("result", result);

// 字符串转化为大写，并逆序

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

let toUpperAndReverse = compose(
	stringToArray,
	stringToUpper
);
let result = toUpperAndReverse(str); // "LOOPSJ"
console.log("result", result);
