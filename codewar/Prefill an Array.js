function prefill(n, v) {
	var arr = [];
    if(""+parseInt(n,10)==="NaN"||n<0||String(n).indexOf(".")!=-1){
    	throw new TypeError( n+" is invalid")
      return;
    }
    for (var i = 0; i < n; i++) {
   		arr.push(v) 	
   }
   return arr;
}
