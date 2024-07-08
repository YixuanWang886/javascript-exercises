const palindromes = function (str) {
  let cleaned = str.toLowerCase().replace(/[^a-z0-9]/gi, "");

  return cleaned === cleaned.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
