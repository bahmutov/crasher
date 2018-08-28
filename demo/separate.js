// server that just throws errors, without handling them
const express = require('express')
const app = express()
app.get('/crash/sync', require('crasher/sync'))
app.get('/crash/async', require('crasher/async'))
app.get('/crash/promise', require('crasher/promise'))

app.listen(3000, function () {
  console.log('Express app listening on port 3000!')
})
