module.exports = function reverse(n) {
    const nAbs = Math.abs(n);
    return +String(nAbs).split("").reverse().join("");
};
