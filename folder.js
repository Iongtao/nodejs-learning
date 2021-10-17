const fs = require('fs')

const path = require('path')

const folderPath = path.resolve()

const folderName = path.join(folderPath, 'folder')

console.log(folderName)

try {
  if (!fs.existsSync(folderName)) {
    fs.mkdirSync(folderName)
  }
} catch (error) {
  console.error(error)
}

try {
  const res = fs.writeFileSync(path.join(folderName, 'text.txt'), 'hhhh', {
    flag: 'a+',
  })
  console.log('创建成功')
} catch (error) {
  console.error(error)
}

console.log(
  fs.readdirSync(folderName).map(filename => path.join(folderName, filename))
)

try {
  fs.renameSync(folderName, path.join(folderPath, 'folder2'))
} catch (error) {
  console.error(error)
}
