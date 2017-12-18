function sevenAte9(str){
   var arr = str.split("");
  for(var i=0;i<arr.length;i++){  
  if(arr[i]==9&&arr[i+1]==7&&arr[i-1]==7){  
  arr.splice(i,1)};
}
return arr.join("");
}