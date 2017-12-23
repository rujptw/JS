function seqToOne(n) {
    var arr = [];
    if (n <= 1) {
        for (var i = 1; i >= n; i--) {
            arr.unshift(i);
        }
    } else {
        for (var i = 1; i <= n; i++) {
            arr.unshift(i);
        }
    }
    return arr;
}