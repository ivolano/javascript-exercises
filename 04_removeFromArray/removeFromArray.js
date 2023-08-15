const removeFromArray = function(arr, ...numbers) {
    return arr.filter((arrNumbers) => !numbers.includes(arrNumbers));
};

// Do not edit below this line
module.exports = removeFromArray;
