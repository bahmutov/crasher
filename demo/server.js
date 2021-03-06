// server that just throws errors, without handling them
const express = require('express')
const app = express()
app.get('/crash-sync', function (req, res) {
  console.log('sync crashing')
  throw new Error('Sync error')
  // this code is unreachable
  res.send('We will crash\n') // eslint-disable-line no-unreachable
})
app.get('/crash-async', function (req, res) {
  console.log('async crashing')
  setTimeout(function () {
    throw new Error('Async error')
  }, 100)
  // this code runs fine
  res.send('after async crash\n')
})
app.get('/crash-promise', function (req, res) {
  console.log('rejecting promise')
  Promise.reject(42)
  res.send('rejected a promise\n')
})
app.get('/crash', require('crasher'))
app.listen(3000, function () {
  console.log('Express app listening on port 3000!')
})
