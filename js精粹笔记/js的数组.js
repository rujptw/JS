Function.prototype.method = function(name, func) {
	this.prototype[name] = func;
	return this;
};
let myArray = [];
console.log(myArray.length);
myArray[2] = true;
console.log(myArray.length);

let numbers = ["one", "two", "three"];
console.log(numbers.length);

numbers[numbers.length] = "four";

console.log(numbers);

delete numbers[2];

console.log(numbers);

numbers.splice(2, 1, 3, 4);
console.log(numbers);

// 给Array增加方法
// NOTICE:报错t.indexOf(i) is not a function;?????
// Array.method("reduce", function(f, value) {
// 	for (let i = 0; i < this.length; i++) {
// 		value = f(this[i], value);
// 	}
// 	return value;
// });

// let data = [4, 8, 15, 16, 23, 42];

// let add = function(a, b) {
// 	return a + b;
// };
// let mult = function(a, b) {
// 	return a * b;
// };

// let sum = data.reduce(add, 0);
// console.log(sum);

// let product = data.reduce(mult,2);
// console.log(mult);

// // 数组是对象可以直接添加方法,非数字下标无法影响数组长度
// data.total = function(){
//   return this.reduce(add,0);
// }

// Array.dim = function(dim,init){
//   var a = [],i;
//   for (i = 0; i < dim; i+=1) {
//       a[i] = init;
//   }
//   return a;
// }
// let myArray = Array.dim(10,0);
//创建多维数组;
// Array.matrix = function(m,n,init){
//   var a,i,j,mat = [];
//   for (i= 0;  i< m; i++) {
//       a = [];
//       for (j = 0; j < n; j++) {
//         a[j] = 0;
//       }
//       mat[i] = a;
//   }
//   return mat;
// // }
let otherMat = Array.matrix(4, 4, 0);
console.log(otherMat[3][3]);
Array.identity = function(n) {
	var i,
		mat = Array.matrix(n, n, 0);
	for (i = 0; i < n; i++) {
		mat[i][i] = 1;
	}
	return mat;
};
let myMatrix = Array.identity(4);
conosle.log(myMatrix[(3, 3)]);
