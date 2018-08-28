const failPromise = require('./fail-promise')

function asyncCrash () {
  throw new Error('This is a test async error (crasher)')
}

function crasher () {
  // see if async errors are handled globally
  setTimeout(asyncCrash, 500)

  // unhandled promise rejection
  failPromise()

  // plain synchronous error
  throw new Error('This is a test error from middleware (crasher)')
}

module.exports = crasher
