function onesComplement(n) {
  var arr = (''+n).split("");
  for(var i=0;i<arr.length;i++){
      arr[i]==1? arr[i] =0: arr[i]=1
  }
  return arr.join("");
};
