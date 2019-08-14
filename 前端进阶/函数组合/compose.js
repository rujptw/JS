let n = "3.56";
let data = parseFloat(n);
// let result = Math.round(data);
// console.log(result);

function compose(before, after) {
	return function(x) {
		return after(before(x));
	};
}
// 将parseFloat的返回值作为Math.round的参数,放到一个函数里，构建成一个新函数
let resultFunc = compose(
	parseFloat,
	Math.round
);
console.log(resultFunc(n));
