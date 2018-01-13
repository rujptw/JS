    //循环体也可以排序
    function redarr(arr) {
        var array = [];
        var obj = {};
        for (var i = 0; i < arr.sort().length; i++) {
            if (array.indexOf(arr[i]) == -1) {
                array.push(arr[i])
            }
        }
        for (var i = 0; i < array.length; i++) {
            obj["" + i] = array[i];
        }
        return obj;
    }
