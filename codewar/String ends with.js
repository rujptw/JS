function solution(str, ending){
  var num = ending.length;
  return str.slice(str.length-num,str.length)===ending? true:false;
}