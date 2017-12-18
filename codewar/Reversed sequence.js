const reverseSeq = n => {
  var arr = [];
  for(var i = 1;i<=n;i++){
  arr.unshift(i)
  }
  return arr;
};