const reverseString = function (input) {
  let str_array = input.split("");
  let re_str = str_array.reverse();
  var output = re_str.join("");
  return output;
};

// Do not edit below this line
module.exports = reverseString;
