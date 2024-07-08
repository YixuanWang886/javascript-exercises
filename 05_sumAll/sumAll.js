const sumAll = function (int1, int2) {
  let start;
  let end;
  let sum = 0;
  if (
    typeof int1 != "number" ||
    typeof int2 != "number" ||
    int1 < 0 ||
    int2 < 0
  ) {
    return "ERROR";
  }

  if (parseInt(int1) < parseInt(int2)) {
    start = parseInt(int1);
    end = parseInt(int2);
  } else {
    start = parseInt(int2);
    end = parseInt(int1);
  }
  for (i = start; i < end + 1; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
