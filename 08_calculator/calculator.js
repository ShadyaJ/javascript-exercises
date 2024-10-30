const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
	return arr.reduce((acc, curr) => acc + curr, 0);
};

const multiply = function(arr) {
  return arr.reduce((acc, curr) => acc * curr, 1);
};

const power = function(base, exponent) {
	return Math.pow(base, exponent);
};

const factorial = function(num) {
  const arrNums = [];
  for(let i = 1; i <= num; i++){
    arrNums.push(i);
  }
  return arrNums.reduce((acc, curr) => acc * curr, 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
