const path = require('path')
const fs = require('fs')

fs.readdir('./src/workspace/components', (err, data) => {
  if (err) {
    console.log(err)
  } else {
    console.log(data.length)
    data.map((item) => {
      fs.readFile(`./src/workspace/components/${item}/index.jsx`, (err, data) => {
        if (err) {
          console.log(err)
        } else {
          console.log(data.toString())
        }
      })
    })
  }
})

