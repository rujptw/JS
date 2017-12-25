function summy(stringOfInts){
   var sum = 0;
   stringOfInts.split(" ").forEach(function(v){
   sum+=Number(v);
   })
   return sum;
}