const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (args) {
  let sum = 0;
  args.forEach((element) => {
    sum = sum + element;
  });
  return Number(sum);
};

const multiply = function (args) {
  let result = 1;
  args.forEach((element) => {
    result = result * element;
  });
  return result;
};

const factorial = function (integer) {
  let result = 1;
  if (integer == 0) {
    return 1;
  }
  for (let index = 1; index < integer + 1; index++) {
    result = result * index;
  }
  return result;
};

const power = function (base, exponent) {
  let result = 1;
  if (exponent == 0) {
    return result;
  }
  for (let index = 0; index < exponent; index++) {
    result *= base;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
