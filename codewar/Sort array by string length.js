    function sortByLength(array) {
    	var arr1 = [];
		for (var i = 0; i < array.length; i++) {
			arr1.push( array[i].length)
		}
		arr1.sort(function(a,b){
			return a-b
		})
		var arr3 = []
		var arr2 = [];
		for (var i = 0; i < arr1.length; i++) {
			for (var j = 0; j < array.length; j++) {
				if(arr1[i]==array[j].length){
					arr3.push(array[j]);
				}
			}
		}
		return arr3;
    }
