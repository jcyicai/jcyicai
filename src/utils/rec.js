const fetch = require('node-fetch')

const getData = uri => {
  return new Promise((resolve, reject) => {
    try {
      fetch(uri).then(res => {
        resolve(res.json())
      })
    } catch (error) {
      reject(error)
    }
  })
}

module.exports = { getData }
