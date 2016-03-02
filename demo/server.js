const express = require('express')
const app = express()
app.get('/crash', function (req, res) {
  res.send('We will crash\n')
})
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
