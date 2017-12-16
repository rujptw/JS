var isSquare = function(n) {
    var reg = /\./g;
    return n < 0 ? false : reg.test(String(Math.sqrt(n))) ? false : true;
}