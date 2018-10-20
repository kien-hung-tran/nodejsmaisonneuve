// console.log(`file name is: ` + __filename);
// console.log(`dir name is: ` + __dirname);
const EventEmitter = require('events');

var url = 'http://monlogger.io/log';

class Logger extends EventEmitter {
    log(message) {
        this.emit('hasLogged', message);
    }    
}

module.exports = Logger;