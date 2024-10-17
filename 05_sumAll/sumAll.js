const sumAll = function(num1, num2) {
    // Throw an error if the values are negative numbers or aren't numbers at all
    if(num1 < 0 || num2 < 0 || !Number.isInteger(num1) || !Number.isInteger(num2)){
        return 'ERROR';
    }

    const [min, max] = [Math.min(num1, num2), Math.max(num1, num2)];
    // Alternative to the solution :
    // if (min > max) [min, max] = [max, min];
    
    let sum = 0;
    for(i = min; i <= max; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
