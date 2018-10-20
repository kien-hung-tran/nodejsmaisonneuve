const os = require('os');

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log(`Total memory: ${totalMemory}`);
console.log(`Free memory: ${freeMemory}`);

// const path = require('path');

// var pathObj = path.parse(__filename);

// console.log(pathObj);

// const logger = require('./logger');

// function afficherNom(nom) {
//     logger(nom);
// }

// console.log(logger);
// afficherNom('kien');

