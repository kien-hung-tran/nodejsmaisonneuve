const fs = require('fs');

var file = fs.readFileSync('./README.md');

console.log(file.toString());
console.log('kien');

fs.readFile('./README.md', (err, file) => {
    console.log(file.toString());
});

console.log('kien');