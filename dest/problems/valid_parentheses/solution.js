/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const openedBrackets = '({[';
    const closedBrackets = ')}]';

    const stack = [];

    for (i in s) {
        const char = s[i];

        if (openedBrackets.indexOf(char) > -1) stack.push(char);

        if (closedBrackets.indexOf(char) > -1) {
            if (openedBrackets[closedBrackets.indexOf(char)] === stack[stack.length - 1]) {
                stack.pop();
            } else {
                return false;
            }
        }

        // console.log(stack);
    }

    return stack.length === 0;
};
