const fibonacci = function(num) {
    if(num < 0) { return 'OOPS' };
    if(num == 0) { return 0 };

    const sequence = [1, 1];

    while(sequence.length < num) {
        sequence.push(sequence[sequence.length - 2] + sequence[sequence.length - 1]);
    }

    return sequence[num - 1];
};

// Do not edit below this line
module.exports = fibonacci;
