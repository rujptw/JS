function reverseLetter(str) {
    var arr = str.split("");
    var arr1 = arr.filter(function(item, i) {
        return str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90 || str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122
    })
    return arr1.reverse().join("");
}