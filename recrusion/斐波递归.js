function factorial(n) {
    if (n == 1 || n == 0) {
        return 1;
    } else if (n < 0) {
        return null;
    } else {
        return n * factorial(n - 1)
    }
};