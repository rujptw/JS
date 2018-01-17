    function sortArray(array) {
        var narr = [];
        var nobj = {};
        for (var i = 0; i < array.length; i++) {
        	array[i] % 2 !== 0?  narr.push(array[i]): nobj["" + i] = array[i]
        }
        narr.sort((a, b) => {
            return a - b
        });
        for (var i in nobj) {
            narr.splice(Number(i), 0, nobj[i])
        }
        return narr;
    }
