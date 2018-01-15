    function arrayPlusArray(arr1, arr2) {
        if (arr1.length === 0) {
            return arr2;
        } else if (arr2.length === 0) {
            return arr1;
        }
        return [arr1.shift() + arr2.shift()].concat(arrayPlusArray(arr1,arr2))
    }
