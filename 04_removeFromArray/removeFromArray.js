const removeFromArray = function(array, ...elements) {
    // My solution :
    for(const elementToRemove of elements){
        array = array.filter(element => element !== elementToRemove);
    }

    return array;

    // Refractored solution :
    // return array.filter(element => !elements.includes(element));
};

// Do not edit below this line
module.exports = removeFromArray;
