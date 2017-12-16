function highAndLow(numbers) {
    var [...a] = numbers.split(" ");
    return Math.max(...a) + " " + Math.min(...a);
}