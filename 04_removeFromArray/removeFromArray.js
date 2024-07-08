const removeFromArray = function (arr, ...values) {
  values.forEach((value) => {
    let index;
    while ((index = arr.indexOf(value)) != -1) {
      arr.splice(index, 1);
    }
  });
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
