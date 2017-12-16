function cal(str) {
	var reg = /\s/g;
	if(reg.test(str)) {
		var arr = str.split(" ")
		for(var i = 0; i < arr.length; i++) {
			arr[i] = arr[i].split("").reverse().join("");
		}
		return arr.join(" ");
	} else {
		var arr = str.split("").reverse().join("");
		return arr
	}
}