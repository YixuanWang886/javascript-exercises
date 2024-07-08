const fibonacci = function (params) {
  if (params == 0) {
    return 0;
  }
  if (params < 0) {
    return "OOPS";
  }
  if (params == 1 || params == 2) {
    return 1;
  }

  return fibonacci(params - 1) + fibonacci(params - 2);
};
// console.log(fibonacci(4));
// Do not edit below this line
module.exports = fibonacci;
