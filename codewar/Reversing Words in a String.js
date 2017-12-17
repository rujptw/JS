function reverse(str) {
    if (/\s/g.test(str)) {
        return str.split(" ").reverse().join(" ");
    } else {
        return str;
    }
}