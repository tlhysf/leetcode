var lengthOfLongestSubstring = function (s) {
    let hash = {}, max = 0;
    for (let i = 0, start = 0; i < s.length; i++) {
        if (hash[s[i]] !== undefined) start = Math.max(hash[s[i]] + 1, start);
        hash[s[i]] = i;
        max = Math.max(i - start + 1, max);
    }
    return max;
};








