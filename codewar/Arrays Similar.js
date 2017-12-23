function arraysSimilar(arr1, arr2) {
    arr1.sort();
    arr2.sort();
    if (arr1.length != arr2.length) {
        return false;
    } else {
    	if(arr1===arr2){
    		return true;
    	}else{
    		return false;
    	}
    }
}