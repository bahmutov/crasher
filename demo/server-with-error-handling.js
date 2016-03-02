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

app.use(function errorHandler (err, req, res, next) {
  console.error(err.message)
  res.status(500)
  res.send('error ' + err.message + '\n')
})
process.on('uncaughtException', function (err) {
  console.error('global exception:', err.message)
})
process.on('unhandledRejection', function (reason, promise) {
  console.error('unhandled promise rejection:', reason.message || reason)
})
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
