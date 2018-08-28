const syncCrash = require('../sync')
const asyncCrash = require('../async')
const failPromise = require('../promise')

function crasher () {
  // see if async errors are handled globally
  asyncCrash()

  // unhandled promise rejection
  failPromise()

  // plain exception
  syncCrash()
}

module.exports = crasher
