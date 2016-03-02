const koa = require('koa')
const route = require('koa-route')
const app = koa()
app.use(route.get('/crash-sync', function * () {
  console.log('sync crashing')
  throw new Error('Sync error')
  // this code is unreachable
  this.body = 'We will crash sync\n' // eslint-disable-line no-unreachable
}))
app.use(route.get('/crash-async', function * () {
  console.log('async crashing')
  setTimeout(function () {
    throw new Error('Async error')
  }, 100)
  // this code runs fine
  this.body = 'We will crash async\n'
}))
app.use(route.get('/crash-promise', function * () {
  console.log('rejecting promise')
  Promise.reject(42)
  this.body = 'rejected a promise\n'
}))
app.listen(3000)
console.log('Koa app listening on port 3000!')
