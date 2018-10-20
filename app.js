const EventEmitter = require('events');
const emitter = new EventEmitter();

const Logger = require('./logger');
const logger = new Logger();

logger.on('hasLogged', (message) => {
    console.log('The message has been received: ' + message);
});

function afficherNom(nom) {
    logger.log(nom);
}

// console.log(logger);
afficherNom('kien');


// emitter.on('messageLogged', function(message) {
//     console.log('Listener called');
//     console.log(message.message);
// })

// emitter.emit('messageLogged', {id: 1, message: 'damn I\'m tired'});

// const fs = require('fs');

// fs.readdir('./', function(err, files) {
//     if (err) console.log('Error', err);
//     else console.log('Result', files);
// });

// const fichiers = fs.readdirSync('./');
// console.log(fichiers);

// const os = require('os');

// var totalMemory = os.totalmem();
// var freeMemory = os.freemem();

// console.log(`Total memory: ${totalMemory}`);
// console.log(`Free memory: ${freeMemory}`);

// const path = require('path');

// var pathObj = path.parse(__filename);

// console.log(pathObj);



