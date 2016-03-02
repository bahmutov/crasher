const koa = require('koa')
const route = require('koa-route')
const app = koa()

function * syncError() {
  console.log('sync crashing')
  throw new Error('Sync error')
  // this code is unreachable
  this.body = 'We will crash sync\n' // eslint-disable-line no-unreachable
}

app.use(route.get('/crash-sync', syncError))
app.use(route.get('/crash-handle-sync', function * () {
  try {
    yield syncError()
  } catch (err) {
    console.log('Sync error happened, and we caught it')
    this.body = 'Sync error handled'
    this.app.emit('error', err, this)
  }
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

app.on('error', function (err, ctx) {
  console.error('Koa app error', err.stack)
  console.error('on url', ctx.req.url)
  console.error('with headers', ctx.req.headers)
})
process.on('uncaughtException', function (err) {
  console.error('global exception:', err.message)
})
process.on('unhandledRejection', function (reason, promise) {
  console.error('unhandled promise rejection:', reason.message || reason)
})

app.listen(3000)
console.log('Koa app listening on port 3000!')
