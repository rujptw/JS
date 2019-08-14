// 在函数的参数中使用扩展运算符，会将所传进来的参数变为一个数组,使用reduce可以将传进来的参数一一处理
function explore(...params) {
	// 如果不返回回调函数的话，函数返回的undefined;
	return params.reduce(function(before, now) {
		return before + now;
	}, 0);
}

console.log(explore(1, 2));

function Right2Left(before, after) {
	return function(str) {
		return after(before(str));
	};
}

// 通过返回上一个函数的结果给另一个函数，构造成一个新的函数,这叫函数组合，可以配合reduce实现不定函数的函数组合,组合从右至左执行
function advanceRight2Left(...func) {
	return function(str) {
		return func.reduce(function(pre, after) {
			return after(pre);
		}, str);
	};
}
// 通过返回上一个函数的结果给另一个函数，构造成一个新的函数,这叫函数组合，可以配合reduceRight实现不定函数管道函数,管道从左至右执行
function advanceLeft2Right(...func) {
	return function(x) {
		return func.reduceRight((pre, after) => {
			return after(pre);
		}, x);
	};
}
function str2Arr(str) {
	return str.split("");
}
function firstCaps(arr) {
	arr[0] = arr[0].toUpperCase();
	return arr.join("");
}
console.log(Right2Left(str2Arr, firstCaps)("we"));
console.log(advanceRight2Left(str2Arr, firstCaps)("we"));
console.log(advanceLeft2Right(str2Arr, firstCaps)("we"));
