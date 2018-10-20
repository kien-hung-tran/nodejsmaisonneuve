const fs = require('fs');
const path = require('path');

var args = process.argv.slice(2);

extension = args[1];
fs.readdir(args[0], (err, files) => {
    if (err) console.log('Error', err);
    else {
        console.log(files);
        if (typeof(extension) !== 'undefined') {
            extension = extension.replace('.','');
            extension = '.' + extension;
        } else {
            extension = '';
        }
        var filtered = files.filter((file) => {
            return (path.extname(file) === extension);
        });
        console.log(filtered);
    }

});
