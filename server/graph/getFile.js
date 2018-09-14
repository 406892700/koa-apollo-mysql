const fs = require('fs')
const path = require('path')

module.exports = (basePath) => {
  const pathArr = []
  const getFile = () => {
    const dir = path.join(__dirname, basePath)
    const list = fs.readdirSync(dir)
    list.forEach((item) => {
      const currentDir = path.join(dir, item)
      if (fs.statSync(currentDir).isDirectory()) {
        getRouter(path.join(basePath, item))
      } else {
        pathArr.push(path.join(basePath, item))
      }
    })
  }
  getFile()
  
  return pathArr
}

