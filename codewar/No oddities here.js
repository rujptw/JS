function noOdds(values) {
    var arr = [];
    values.forEach(function(item, index) {
        if (values[index] % 2 === 0) {
            arr.push(values[index])
        }
    })
    return arr;
}
