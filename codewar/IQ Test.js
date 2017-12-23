function iqTest(numbers) {
    var arr = numbers.split(" ");
    var arr1 = [];
    var arr2 = [];
    arr.forEach((v, i) => {
    	v % 2 != 0? arr1.push(v):arr2.push(v);
    })
    return arr1.length == 1? arr.indexOf(arr1[0]) + 1:arr.indexOf(arr2[0]) + 1
}