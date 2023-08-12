/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    if (x < 0) return false;

    let xCopy = x;
    let reversed = 0;

    while (x > 0) {
        const last = x % 10;
        reversed = reversed * 10 + last;
        x = ~~(x / 10);
    }

    return xCopy === reversed;
};

