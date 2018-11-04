const http = require('http');

const cours = [
    'http',
    'node',
    'npm'
];

const routes = {
    '/js/cours': (req, res) => {
        cours.forEach((element) => {
            res.write(element)
            res.write(' ');
        });
        res.end();
    },
    '/js/note': (req, res) => {
        res.write('Voici une note');
        res.end();
    },
};



const server = http.createServer((req,res) => {
    if (req.url === '/') {
        res.write('Hello world');
        res.end();
    } else {
        if (typeof routes[req.url] !== 'undefined') {
            routes[req.url](req,res);
        } else {
            res.write('Invalid path');
            res.end();
        }
    }
});

server.listen(3000);

// const EventEmitter = require('events');
// const emitter = new EventEmitter();

// const Logger = require('./logger');
// const logger = new Logger();

// logger.on('hasLogged', (message) => {
//     console.log('The message has been received: ' + message);
// });

// function afficherNom(nom) {
//     logger.log(nom);
// }

// console.log(logger);
// afficherNom('kien');


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



