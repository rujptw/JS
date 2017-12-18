 function array_diff(a, b) {
     var arr = [];
     a.forEach(function(v, i) {
         if (b.indexOf(a[i]) == -1) {
             arr.push(a[i]);
         }
     })
     return arr;
 }