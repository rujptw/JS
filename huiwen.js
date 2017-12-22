//普通
// function cal(str){
// 	var nstr= str.split("").reverse().join("");
// 	return nstr === str? true:false;
// }
//递归
function cal(str){
	if(str.length==0 || str.length==1){
		return true;
	}else{
		return str[0] == str[str.length-1]? cal(str.slice(1,str.length-1)):false;
	}
}
console.log(cal("acbca"))