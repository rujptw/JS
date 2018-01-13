    //arguments具备数组的特性，可进行循环，但不具有数组的方法
    function numbers() {
        for (var i = 0; i < arguments.length; i++) {
            if(typeof arguments[i] !=="number"){
            	return false;
            }
        }
        return true;
    }
