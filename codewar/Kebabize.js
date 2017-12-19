function kebabize(str) {
    for (var i = 0; i < str.split("").length; i++) {
        if (str.charCodeAt(i) >= 48 && str.charCodeAt(i) <= 57) {
            str.split("").splice(i, 1, "");
        }
    }
    var nstr = str.split("").join("");
    var arr1 = [];
    for (var i = 0; i < str.split("").length; i++) {
        if (str.split("")[i] != '') {
            arr1.push(str.split("")[i])
        }
    }
    for (var i = 0; i < nstr.length; i++) {
        if (nstr.charCodeAt(i) >= 65 && nstr.charCodeAt(i) <= 90) {
            if (i != 0) {
                arr1.splice(i, 1, "-" + arr1[i].toLowerCase())
            } else {
                arr1.splice(i, 1, arr1[i].toLowerCase())
            };
        }
    }
    return arr1.join("");
}