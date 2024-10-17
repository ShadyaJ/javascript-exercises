const leapYears = function(year) {
    // Leap years are divisible by 4. If they are also divisible by 100, they are not leap years except if divisible by 400.
    return (year % 400 === 0) || (year % 100 !== 0 && year % 4 === 0);
};

// Do not edit below this line
module.exports = leapYears;
