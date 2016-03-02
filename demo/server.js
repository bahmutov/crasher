const express = require('express')
const app = express()
app.get('/crash', function (req, res) {
  console.log('sync crashing')
  throw new Error('Sync error')
  // this code is unreachable
  res.send('We will crash\n') // eslint-disable-line no-unreachable
})
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
