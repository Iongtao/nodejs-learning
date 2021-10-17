const path = require('path')

const notes = 'input.txt'

console.log(path.dirname(notes));
console.log(path.basename(notes, path.extname(notes)));
console.log(path.extname(notes));
console.log(path.resolve('/hhh', notes));
console.log(path.join('/', 'aaa', notes))
console.log(path.isAbsolute('package.json'));
console.log(path.parse(path.resolve()))