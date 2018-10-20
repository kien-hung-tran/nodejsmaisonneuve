const process = require('process');

var sum = 0;

const arguments = process.argv.slice(2);

const numberArguments = arguments.filter((value) => {
    return isNumber(value);
}).map((value) => Number(value));

console.log(numberArguments.reduce((total, num) => {
    return total + num;
}, 0));

// process.argv.forEach((value, index) => {
//     if (index > 1 && isNumber(value)) {
//         sum = +sum + +value;
//     }
// })

// console.log(sum);

function isNumber(value) {
    return !isNaN(value) && isFinite(value);
}