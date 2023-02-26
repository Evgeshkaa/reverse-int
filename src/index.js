module.exports = function reverse(number) {
    let result = 0;
    number = Math.abs(number);
    while (number > 0) {
        result = result * 10 + number % 10;
        number = Math.floor(number / 10);
    }

    return result;
}
