const fs = require('fs');

const lines = fs.readFileSync(process.argv[2])

const newlines = lines.toString().split('\n').length - 1;

console.log(newlines);