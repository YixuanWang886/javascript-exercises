const repeatString = function (str, times) {
  let output = "";
  if (parseInt(times) == 0) {
    return "";
  } else if (parseInt(times) < 0) {
    return "ERROR";
  } else {
    for (i = 0; i < parseInt(times); i++) {
      output += str;
    }
    return output;
  }
};

// Do not edit below this line
module.exports = repeatString;
