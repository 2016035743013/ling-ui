const path = require('path')
const fs = require('fs')

// fs.readdir('./src/workspace/components', (err, data) => {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log(data.length)
//     data.map((item) => {
//       fs.readFile(`./src/workspace/components/${item}/index.jsx`, (err, data) => {
//         if (err) {
//           console.log(err)
//         } else {
//           console.log(data.toString())
//         }
//       })
//     })
//   }
// })
fs.readFile(`${__dirname}/index.jsx`, (err, data) => {
  if (err) {
    console.log(err)
  } else {
    const fileData = data.toString()
    const res = fileData.match(/Button.propTypes = {[\S|\d|\D|\s|\W|\w]+\}/g) //+ 正则表达是模糊匹配proptypes
    const defaultRes = fileData.match(/Button.defaultProps = {[\S|\d|\D|\s|\W|\w]+defaultend/g)
    const defaultValMap = {}
    if (defaultRes) {
      const defaultProps = defaultRes[0].replace(/(Button.defaultProps|\{|\}|=|\n|\r|\s|\/\/defaultend)/g, '').split(',')
      defaultProps.map((item) => {
        const temp = item.replace(/["|']/g, '').split(':')
        defaultValMap[temp[0]] = temp[1]
      })
    }
    if (res) {
      const propstr = res[0].replace(/(Button.propTypes|\{|\}|=|\n|\r|\s)/g, '').split('end')
      const obj = {}
      console.log(propstr)
      propstr.map(item => {
        const itemData = item.split(',')
        const prop = itemData[0].split(':')
        obj[prop[0]] = {
          type: prop[1].replace('PropTypes.', ''),
          description: itemData[1].replace('//', ''),
          prop: prop[0],
          default: '-'
        }
      })
      Object.keys(defaultValMap).forEach(item => {
        obj[item].default = defaultValMap[item] ? defaultValMap[item] : '-'
      })
      let tableData = '| 参数 | 描述 | 类型 | 默认值 | \n| - | - | - | - | \n'
      Object.values(obj).forEach((item) => {
        tableData += ('|' + item.prop + '|' + item.description)
        tableData += ('|' + item.type + '| ' + item.default + ' | \n')
      })
      console.log(tableData)
      fs.writeFile(`${__dirname}/tableData.md`, tableData, (err) => {
        console.log(err)
      })
    }
  }
})

