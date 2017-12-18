function GetSum(a, b) {
    var sum = 0;
    var arr = [a, b];
    if (a == b) {
        return a;
    } else if (a < b) {
        for (var i = a; i <= b; i++) {
            sum += i
        }
    } else if (a > b) {
        for (var i = b; i <= a; i++) {
            sum += i
        }
    }
    return sum;
}