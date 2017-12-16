 function average(scores) {
     var num = scores.reduceRight(function(p, c, i, arr) {
         return p + c;
     })
     return Math.round(num / scores.length)
 }