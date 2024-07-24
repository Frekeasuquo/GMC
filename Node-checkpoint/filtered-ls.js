const fs = require('fs');
const path = require('path');

const data = process.argv[2]
let extension = '.' + process.argv[3];

fs.readdir(data, function(err, files) {
    if (err) return err;

    for (let i = 0; i < files.length; i++) {
        if (path.extname(files[i]) === extension) {
            console.log(files[i])
        }
    }
})