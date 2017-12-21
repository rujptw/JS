function removeUrlAnchor(url) {
    var arr = url.split("");
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == "#") {
            return url.substring(0, i);
        }
    }
    //遍历完成都没有发现#,直接把urlreturn出去;
    return url;
}