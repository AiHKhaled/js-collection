const palindromes = function (str) {
  return str == str.split("").reverse().join("");
};
