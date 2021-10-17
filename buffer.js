var buffer1 = Buffer.from('ABCDEF9c');
var buffer2 = Buffer.from('ABCDEF9a765');

const num = buffer1.compare(buffer2)
console.log(num);