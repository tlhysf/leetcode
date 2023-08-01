/**
 * @param {string} s
 * @return {number}
 */
const longestContinuousSubstring = (s) => {
    let subStr = '';
    let max = 0;

    for (let i = 0; i < s.length; i++) {
        subStr += s[i];
        if ('abcdefghijklmnopqrstuvwxyz'.includes(subStr)) max = Math.max(max, subStr.length);
        else subStr = s[i];
    }

    return max;
};






