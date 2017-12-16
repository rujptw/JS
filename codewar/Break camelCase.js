function solution(string) {
    var arr = string.split("");
    for (var i = 0; i < string.length; i++) {
        if (string.charCodeAt(i) >= 65 && (string.charCodeAt(i) <= 90)) {
            arr[i] = " " + arr[i]
        }
    }
    return arr.join("");
}