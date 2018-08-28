const syncCrash = require('./sync-crash')
const asyncCrash = require('./async-crash')
const failPromise = require('./fail-promise')

function crasher () {
  // see if async errors are handled globally
  asyncCrash()

  // unhandled promise rejection
  failPromise()

  // plain exception
  syncCrash()
}

module.exports = crasher
