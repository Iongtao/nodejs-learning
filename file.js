var fs = require('fs')

// fs.open('input1.txt', 'r', (err, fd) => {
//   if(err) console.log(err)
//   console.log(fd);
// })

// fs.stat('input.txt', (err, stats) => {
//   if(err) {
//     console.error(err);
//     return
//   }

//   console.log(stats);
// })

// try {
//   const stats = fs.statSync('input.txt')
//   console.log(stats.isFile());
//   console.log(stats.isDirectory());
//   console.log(stats.isSymbolicLink());
// } catch (error) {
//   console.error(error);
// }

// fs.readFile('input.txt', 'utf8', (err, data) => {
//   if(err) {
//     return console.error(err);
//   }
//   console.log(data);
// })

// try {
//   const data = fs.readFileSync('input.txt', 'utf8')
//   console.log(data)
// } catch (error) {
//   console.error(error)
// }

const content = '我爱畑卉妹妹'

try {
  const data = fs.writeFileSync('input.txt', content, { flag: 'a+' }, err => {})
  console.log(data)
} catch (error) {
  console.error(error)
}
