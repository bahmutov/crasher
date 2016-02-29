function asyncCrash () {
  throw new Error('This is a test async error (crasher)')
}

function crasher () {
  setTimeout(asyncCrash, 500)
  throw new Error('This is a test error from middleware (crasher)')
}

module.exports = crasher
